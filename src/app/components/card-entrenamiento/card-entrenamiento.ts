import { Component, Input } from '@angular/core';
import { EntrenamientoModel } from '../../services/entrenamiento.model';

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
}
