import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EntrenamientoService } from '../../services/entrenamiento-service';
import { EntrenamientoModel } from '../../services/entrenamiento.model';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-entrenamiento',
  imports: [RouterLink, FormsModule],
  templateUrl: './entrenamiento.html',
  styleUrl: './entrenamiento.css'
})
export class Entrenamiento  {

}
