import { Component, Input } from '@angular/core';
import { ArcoModel } from '../../services/arco.model';
import { ArcoService } from '../../services/arco-service';


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
  }

  constructor(private arcoService: ArcoService) { }

  deleteArco(): void {
    console.log('Eliminando arco con ID:', this.arco.idArco);
    if (!this.arco.idArco || this.arco.idArco <= 0) {
      console.error('ID de arco inválido:', this.arco.idArco);
      return;
    }
    this.arcoService.deleteArco(this.arco.idArco).subscribe({
      next: () => {
        console.log('Arco eliminado exitosamente');
      },
      error: (error) => {
        console.error('Error al eliminar arco:', error);
      }
    });
  }

}
