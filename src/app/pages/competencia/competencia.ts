import { CompetenciaService } from '../../services/competencia-service';
import {Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetenciaModel } from '../../services/competencia.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-competencia',
  imports: [FormsModule],
  templateUrl: './competencia.html',
  styleUrl: './competencia.css'
})
export class Competencia implements OnInit{
  @Input() idArquero?: number;

  competencia: CompetenciaModel = {
    idCompetencia: undefined,
    nombre: '',
    fechaInicio: '',
    fechaTermino: '',
    puntajeClasificatorio: 0,
    posicionClasificatorio: 0,
    posicionROI: 0,
    maximoROI: 0,
    arquero: {
      idArquero: 0
    }
  }

  ngOnInit(): void {
    console.log('ID del arquero:', this.idArquero);

    if (this.idArquero) {
      this.competencia.arquero.idArquero = this.idArquero;
    } else {
      console.error('ID del arquero no proporcionado');
    }
  }

  constructor(private competenciaService: CompetenciaService) { }

  guardarCompetencia(): void {
    console.log('Datos de la competencia:', this.competencia);
    this.competenciaService.postCompetencia(this.competencia).subscribe({
      next: (response) => {
        console.log('Competencia registrada exitosamente:', response);
        Swal.fire({
          icon: 'success',
          title: 'Competencia registrada',
          text: 'La competencia se ha registrado correctamente.',
          confirmButtonColor: '#3085d6',
        });

        // Limpiar el formulario después de registrar
        this.competencia = {
          idCompetencia: undefined,
          nombre: '',
          fechaInicio: '',
          fechaTermino: '',
          puntajeClasificatorio: 0,
          posicionClasificatorio: 0,
          posicionROI: 0,
          maximoROI: 0,
          arquero: {
            idArquero: this.idArquero || 0
          }
        };
      },
      error: (error) => {
        console.error('Error al registrar competencia:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al registrar la competencia. Por favor, intenta nuevamente.',
          confirmButtonColor: '#d33',
        });
      }
    });
  }
}
