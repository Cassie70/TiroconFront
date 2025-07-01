import { Component, OnInit } from '@angular/core';
import {InfoArqueroGeneral} from '../../components/info-arquero-general/info-arquero-general';
import {InfoArqueroTablas} from '../../components/info-arquero-tablas/info-arquero-tablas';
import { ArqueroService } from '../../services/arquero-service';
import { ArqueroModel } from '../../services/arquero.model';
import { Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-info-arquero',
  imports: [
    InfoArqueroGeneral, InfoArqueroTablas
  ],
  templateUrl: './info-arquero.html',
  styleUrl: './info-arquero.css'
})
export class InfoArquero implements OnInit {

  @Input() idArquero?: number;

  // Datos del arquero
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
