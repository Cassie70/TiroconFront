import { CompetenciaService } from '../../services/competencia-service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { CompetenciaModel } from '../../services/competencia.model';

@Component({
  selector: 'app-competencia',
  imports: [RouterLink, FormsModule],
  templateUrl: './competencia.html',
  styleUrl: './competencia.css'
})
export class Competencia {

  competencia: CompetenciaModel = {
    nombre: '',
    fechaInicio: '',
    fechaTermino: '',
    puntajeClasificatorio: 0,
    posicionClasificatorio: 0,
    posicionROI: 0,
    maximoROI: 0,
    arquero: {
      idArquero: 201 //sacar este valor de la url o del servicio
    }
  }

  constructor(private competenciaService: CompetenciaService) { }

  guardarCompetencia(): void {
    console.log('Datos de la competencia:', this.competencia);
    this.competenciaService.postCompetencia(this.competencia).subscribe({
      next: (response) => {
        console.log('Competencia registrada exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al registrar competencia:', error);
      }
    });
  }
}
