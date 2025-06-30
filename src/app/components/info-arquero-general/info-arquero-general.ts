import { Component } from '@angular/core';

@Component({
  selector: 'app-info-arquero-general',
  imports: [],
  templateUrl: './info-arquero-general.html',
  styleUrl: './info-arquero-general.css'
})
export class InfoArqueroGeneral {
  nombre: string = 'Ratauster';
  marcaPersonal: number = 5;
  categoria: string = 'Arquero';
  asociacion: string = 'Raton';
}
