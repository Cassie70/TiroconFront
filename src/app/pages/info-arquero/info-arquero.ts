import { Component } from '@angular/core';
import {InfoArqueroGeneral} from '../../components/info-arquero-general/info-arquero-general';
import {InfoArqueroTablas} from '../../components/info-arquero-tablas/info-arquero-tablas';

@Component({
  selector: 'app-info-arquero',
  imports: [
    InfoArqueroGeneral, InfoArqueroTablas
  ],
  templateUrl: './info-arquero.html',
  styleUrl: './info-arquero.css'
})
export class InfoArquero {

}
