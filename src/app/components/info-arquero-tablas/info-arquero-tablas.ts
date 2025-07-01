import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import {CardEntrenamiento} from '../../components/card-entrenamiento/card-entrenamiento';
import { CardCompetencia } from '../card-competencia/card-competencia';
import { CardArco } from '../card-arco/card-arco';
import { ArqueroService } from '../../services/arquero-service';
import { ArqueroModel } from '../../services/arquero.model';
@Component({
  selector: 'app-info-arquero-tablas',
  imports: [RouterLink, CardArco, CardCompetencia, CardEntrenamiento],
  templateUrl: './info-arquero-tablas.html',
  styleUrl: './info-arquero-tablas.css'
})
export class InfoArqueroTablas {
  @Input() arquero: ArqueroModel = {
    idArquero: 0,
    nombre: '',
    apellido: '',
    marcaPersonal: 0,
    categoria: '',
    asociacion: '',
    arcos: [],
    entrenamientos: [],
    competencias: []
  };

  
}
