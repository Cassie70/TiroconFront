import { Component } from '@angular/core';

@Component({
  selector: 'app-info-card-simple',
  imports: [],
  templateUrl: './info-card-simple.html',
  styleUrl: './info-card-simple.css'
})
export class InfoCardSimple {
  nombre: string = 'Ratauster';
  asociacion: string = 'Raton';
}
