import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompetenciaModel } from '../../services/competencia.model';
import { CompetenciaService } from '../../services/competencia-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-competencia',
  imports: [],
  templateUrl: './card-competencia.html',
  styleUrl: './card-competencia.css'
})
export class CardCompetencia {
  @Input() competencia: CompetenciaModel = {
    idCompetencia: 0,
    nombre: '',
    fechaInicio: '',
    fechaTermino: '',
    puntajeClasificatorio: 0,
    posicionClasificatorio: 0,
    posicionROI: 0,
    maximoROI: 0,
    arquero: {
      idArquero: 0
    }
  }

  @Output() competenciaEliminada = new EventEmitter<number>();

  constructor(private competenciaService: CompetenciaService) { }

  deleteCompetencia(): void {
    if (!this.competencia.idCompetencia || this.competencia.idCompetencia <= 0) {
      console.error('ID de competencia inválido:', this.competencia.idCompetencia);
      Swal.fire('Error', 'El ID de la competencia no es válido.', 'error');
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.competenciaService.deleteCompetencia(this.competencia.idCompetencia!).subscribe({
          next: () => {
            console.log('Competencia eliminada exitosamente');
            this.competenciaEliminada.emit(this.competencia.idCompetencia!);
            Swal.fire('¡Eliminado!', 'La competencia ha sido eliminada.', 'success');
          },
          error: (error) => {
            console.error('Error al eliminar competencia:', error);
            Swal.fire('Error', 'Hubo un problema al eliminar la competencia.', 'error');
          }
        });
      }
    });
  }
}
