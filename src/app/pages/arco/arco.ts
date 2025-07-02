import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArcoService } from '../../services/arco-service';
import { ArcoModel } from '../../services/arco.model';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-arco',
  imports: [FormsModule],
  templateUrl: './arco.html',
  styleUrl: './arco.css',
})
export class Arco implements OnInit {
  @Input() idArquero?: number;

  arco: ArcoModel = {
    idArco: undefined,
    tipo: '',
    marca: '',
    libraje: 0,
    apertura: 0,
    peso: 0,
    arquero: {
      idArquero: 0,
    },
  };

  ngOnInit(): void {
    console.log('ID del arquero:', this.idArquero);

    if (this.idArquero) {
      this.arco.arquero.idArquero = this.idArquero;
    } else {
      console.error('ID del arquero no proporcionado');
    }
  }

  constructor(private arcoService: ArcoService) {}

  guardarArco(): void {
    console.log('Datos del arco:', this.arco);
    this.arcoService.postArco(this.arco).subscribe({
      next: (response) => {
        console.log('Arco registrado exitosamente:', response);
        Swal.fire({
          icon: 'success',
          title: 'Arco registrado',
          text: 'El arco se ha registrado correctamente.',
          confirmButtonColor: '#3085d6',
        });

        // Limpiar el formulario después de registrar
        this.arco = {
          idArco: undefined,
          tipo: '',
          marca: '',
          libraje: 0,
          apertura: 0,
          peso: 0,
          arquero: {
            idArquero: this.idArquero
          },
        };
      },
      error: (error) => {
        console.error('Error al registrar arco:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al registrar el arco. Por favor, intenta nuevamente.',
          confirmButtonColor: '#d33',
        });
      },
    });
  }
}
