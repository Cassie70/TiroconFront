import { Component, Input } from '@angular/core';
import { CompetenciaModel } from '../../services/competencia.model';
import { CompetenciaService } from '../../services/competencia-service';

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

  constructor(private competenciaService: CompetenciaService) { }

  deleteCompetencia(): void {
    console.log('Eliminando competencia con ID:', this.competencia.idCompetencia);
    if (!this.competencia.idCompetencia || this.competencia.idCompetencia <= 0) {
      console.error('ID de competencia inválido:', this.competencia.idCompetencia);
      return;
    }
    this.competenciaService.deleteCompetencia(this.competencia.idCompetencia).subscribe({
      next: () => {
        console.log('Competencia eliminada exitosamente');
      },
      error: (error) => {
        console.error('Error al eliminar competencia:', error);
      }
    });
  }
}
