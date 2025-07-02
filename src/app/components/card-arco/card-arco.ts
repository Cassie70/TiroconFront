import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArcoModel } from '../../services/arco.model';
import { ArcoService } from '../../services/arco-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-card-arco',
  imports: [],
  templateUrl: './card-arco.html',
  styleUrl: './card-arco.css'
})
export class CardArco {
  @Input() arco: ArcoModel = {
    idArco: 0,
    tipo: '',
    marca: '',
    libraje: 0,
    apertura: 0,
    peso: 0,
    arquero: {
      idArquero: 0
    }
  };

  @Output() arcoEliminado = new EventEmitter<number>();

  constructor(private arcoService: ArcoService) { }

  deleteArco(): void {
    if (!this.arco.idArco || this.arco.idArco <= 0) {
      console.error('ID de arco inválido:', this.arco.idArco);
      Swal.fire('Error', 'El ID del arco no es válido.', 'error');
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
        this.arcoService.deleteArco(this.arco.idArco!).subscribe({
          next: () => {
            console.log('Arco eliminado exitosamente');
            this.arcoEliminado.emit(this.arco.idArco!);
            Swal.fire('¡Eliminado!', 'El arco ha sido eliminado.', 'success');
          },
          error: (error) => {
            console.error('Error al eliminar arco:', error);
            Swal.fire('Error', 'Hubo un problema al eliminar el arco.', 'error');
          }
        });
      }
    });
  }
}
