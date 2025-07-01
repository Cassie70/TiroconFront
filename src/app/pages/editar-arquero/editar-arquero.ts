import { Component, Input, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArqueroModel } from '../../services/arquero.model';
import { ChangeDetectorRef } from '@angular/core';
import { ArqueroService } from '../../services/arquero-service';

@Component({
  selector: 'app-editar-arquero',
  imports: [RouterLink],
  templateUrl: './editar-arquero.html',
  styleUrl: './editar-arquero.css'
})
export class EditarArquero implements OnInit {
   
  @Input() idArquero?: number;

  arquero: ArqueroModel = {
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
  constructor(
      private service: ArqueroService,
      private cdr: ChangeDetectorRef
    ) { }
  
    ngOnInit(): void {
      console.log('ID del arquero:', this.idArquero);
  
      if (this.idArquero) {
        this.service.getById(this.idArquero).subscribe({
          next: (data) => {
            this.arquero = data;
            console.log('Datos del arquero:', data);
            this.cdr.detectChanges();
          },
          error: (error) => {
            console.error('Error al obtener los datos del arquero:', error);
          }
        });
      } else {
        console.error('ID del arquero no proporcionado');
      }
    }

}
