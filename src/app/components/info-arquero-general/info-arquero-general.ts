import { Component, Input } from '@angular/core';
import { ArqueroModel } from '../../services/arquero.model';

@Component({
  selector: 'app-info-arquero-general',
  imports: [],
  templateUrl: './info-arquero-general.html',
  styleUrl: './info-arquero-general.css'
})
export class InfoArqueroGeneral {
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
