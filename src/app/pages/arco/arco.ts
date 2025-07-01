import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArcoService} from '../../services/arco-service';
import { ArcoModel } from '../../services/arco.model';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-arco',
  imports: [RouterLink, FormsModule],
  templateUrl: './arco.html',
  styleUrl: './arco.css'
})
export class Arco implements OnInit {
  @Input() idArquero?: number;

  arco: ArcoModel = {
    tipo: '',
    marca: '',
    libraje: 0,
    apertura: 0,
    peso: 0,
    arquero: {
      idArquero: 201
    }
  }

  ngOnInit(): void {
    console.log('ID del arquero:', this.idArquero);

    if (this.idArquero) {
      this.arco.arquero.idArquero = this.idArquero;
    } else {
      console.error('ID del arquero no proporcionado');
    }
  }

  constructor(private arcoService: ArcoService) { }

  guardarArco(): void {
    console.log('Datos del arco:', this.arco);
    this.arcoService.postArco(this.arco).subscribe({
      next: (response) => {
        console.log('Arco registrado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al registrar arco:', error);
      }
    });
  }
}
