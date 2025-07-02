import { DistanciaModel } from './../../services/distancia.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EntrenamientoService } from '../../services/entrenamiento-service';
import { EntrenamientoModel } from '../../services/entrenamiento.model';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { SerieModel } from '../../services/serie.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrenamiento',
  imports: [FormsModule],
  templateUrl: './entrenamiento.html',
  styleUrl: './entrenamiento.css'
})
export class Entrenamiento implements OnInit {

  @Input() idArquero: number = 0;

  entrenamiento: EntrenamientoModel = {
    fecha: '',
    distancias: [],
    arquero: {
      idArquero: 0
    }
  };

  constructor(private entrenamientoService: EntrenamientoService) {}

  ngOnInit(): void {
    this.entrenamiento.arquero.idArquero = this.idArquero;
  }

  agregarDistancia() {
    const nuevaDistancia: DistanciaModel = {
      idDistancia: undefined,
      metros: 0,
      entrenamiento: { idEntrenamiento: undefined },
      series: []
    };
    this.entrenamiento.distancias.push(nuevaDistancia);
  }

  eliminarDistancia(index: number) {
    this.entrenamiento.distancias.splice(index, 1);
  }

  agregarSerie(distancia: DistanciaModel) {
    const nuevaSerie: SerieModel = {
      idSerie: undefined,
      flecha1: 0,
      flecha2: 0,
      flecha3: 0,
      flecha4: 0,
      flecha5: 0,
      flecha6: 0,
      distancia: { idDistancia: distancia.idDistancia }
    };
    distancia.series.push(nuevaSerie);
  }

  eliminarSerie(distancia: DistanciaModel, index: number) {
    distancia.series.splice(index, 1);
  }

  guardar() {
    this.entrenamientoService.postEntrenamiento(this.entrenamiento).subscribe({
      next: (response) => {
        console.log('Entrenamiento guardado exitosamente:', response);
        // Aquí puedes redirigir o mostrar un mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: 'Entrenamiento guardado',
          text: 'El entrenamiento se ha guardado correctamente.',
          confirmButtonColor: '#3085d6',
        });

      }
      ,
      error: (error) => {
        console.error('Error al guardar el entrenamiento:', error);
        // Aquí puedes manejar el error, mostrar un mensaje, etc.
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al guardar el entrenamiento. Por favor, intenta nuevamente.',
          confirmButtonColor: '#d33',
        });
      }
    });
  }
}
