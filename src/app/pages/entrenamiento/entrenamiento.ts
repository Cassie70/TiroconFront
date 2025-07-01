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
export class Entrenamiento implements OnInit{
  @Input() idArquero?: number;

  entrenamiento: EntrenamientoModel = {
    fecha: '',
    distancia: 0,
    flecha1: 0,
    flecha2: 0,
    flecha3: 0,
    flecha4: 0,
    flecha5: 0,
    flecha6: 0,
    arquero: {
      idArquero: 201 // ID del arquero, puede ser dinámico según tu aplicación
    }
  }

  ngOnInit(): void {
    console.log('ID del arquero:', this.idArquero);

    if (this.idArquero) {
      this.entrenamiento.arquero.idArquero = this.idArquero;
    } else {
      console.error('ID del arquero no proporcionado');
    }
  }

    constructor(private entrenamientoService: EntrenamientoService) { }

    guardarEntrenamiento(): void {
    console.log('Datos del entrenamiento:', this.entrenamiento);
    this.entrenamientoService.postEntrenamiento(this.entrenamiento).subscribe({
      next: (response) => {
        console.log('Entrenamiento registrado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al registrar entrenamiento:', error);
      }
    });
  }
}
