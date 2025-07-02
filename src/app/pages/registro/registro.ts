import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArqueroService } from '../../services/arquero-service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ArqueroDTOModel } from '../../services/arquerodto.model';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  arquero: ArqueroDTOModel = {
    nombre: '',
    apellido: '',
    marcaPersonal: 0,
    categoria: '',
    asociacion: '',
  }

  imagenSeleccionada: File | null = null;

  constructor(private arqueroService: ArqueroService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        Swal.fire({
          icon: 'error',
          title: 'Archivo inválido',
          text: 'El archivo seleccionado no es una imagen.',
          confirmButtonColor: '#d33',
        });
        return;
      }
      this.imagenSeleccionada = file;
    }
  }

  guardarArquero(): void {
    console.log('Datos del arquero:', this.arquero);
    this.arqueroService.post(this.arquero).subscribe({
      next: (response) => {
        console.log('Arquero registrado exitosamente:', response);

        if (this.imagenSeleccionada) {
          this.arqueroService.uploadImage(1, this.imagenSeleccionada).subscribe({
            next: () => {
              Swal.fire({
                icon: 'success',
                title: 'Arquero registrado con imagen',
                text: 'El arquero y su imagen se han registrado correctamente.',
                confirmButtonColor: '#3085d6',
              });
            },
            error: (error) => {
              console.error('Error al subir imagen:', error);
              Swal.fire({
                icon: 'warning',
                title: 'Arquero registrado',
                text: 'El arquero se registró, pero hubo un error al subir la imagen.',
                confirmButtonColor: '#f0ad4e',
              });
            }
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Arquero registrado',
            text: 'El arquero se ha registrado correctamente.',
            confirmButtonColor: '#3085d6',
          });
        }

      },
      error: (error) => {
        console.error('Error al registrar el arquero:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al registrar el arquero. Por favor, intenta nuevamente.',
          confirmButtonColor: '#d33',
        });
      }
    });
  }
}
