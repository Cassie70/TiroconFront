import { Component } from '@angular/core';
import { ArqueroModel } from '../../services/arquero.model';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-card-simple',
  imports: [RouterLink],
  templateUrl: './info-card-simple.html',
  styleUrl: './info-card-simple.css'
})
export class InfoCardSimple {

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
