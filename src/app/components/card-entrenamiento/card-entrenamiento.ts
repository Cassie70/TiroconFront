import { Component, Input } from '@angular/core';
import { EntrenamientoModel } from '../../services/entrenamiento.model';
import { EntrenamientoService } from '../../services/entrenamiento-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-entrenamiento',
  imports: [],
  templateUrl: './card-entrenamiento.html',
  styleUrl: './card-entrenamiento.css'
})
export class CardEntrenamiento {

  @Input() entrenamiento: EntrenamientoModel = {
    idEntrenamiento: 0,
    fecha: '',
    distancias: [],
    arquero: {
      idArquero: 0
    }
  }

  constructor(private entrenamietoService: EntrenamientoService) { }

  deleteEntrenamiento(): void {
    if (!this.entrenamiento.idEntrenamiento || this.entrenamiento.idEntrenamiento <= 0) {
      console.error('ID de entrenamiento inválido:', this.entrenamiento.idEntrenamiento);
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
        this.entrenamietoService.deleteEntrenamiento(this.entrenamiento.idEntrenamiento!).subscribe({
          next: () => {
            console.log('Entrenamiento eliminado exitosamente');
            Swal.fire('¡Eliminado!', 'El entrenamiento ha sido eliminado.', 'success');
          },
          error: (error) => {
            console.error('Error al eliminar entrenamiento:', error);
            Swal.fire('Error', 'Hubo un problema al eliminar el entrenamiento.', 'error');
          }
        });
      }
    });
  }

}
