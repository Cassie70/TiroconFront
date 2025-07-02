import { Component, OnInit } from '@angular/core';
import {InfoArqueroGeneral} from '../../components/info-arquero-general/info-arquero-general';
import {InfoArqueroTablas} from '../../components/info-arquero-tablas/info-arquero-tablas';
import { ArqueroService } from '../../services/arquero-service';
import { ArqueroModel } from '../../services/arquero.model';
import { Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-arquero',
  imports: [
    InfoArqueroGeneral, InfoArqueroTablas, RouterLink
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
    private cdr: ChangeDetectorRef,
    private router: Router
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

  eliminarArquero(): void {
    if (!this.arquero.idArquero || this.arquero.idArquero <= 0) {
      console.error('ID de arquero inválido:', this.arquero.idArquero);
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(this.arquero.idArquero!).subscribe({
          next: () => {
            console.log('Arquero eliminado exitosamente');
            Swal.fire('¡Eliminado!', 'El arquero ha sido eliminado.', 'success');
            // Redirigir a la página de inicio o a otra página después de eliminar
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error al eliminar arquero:', error);
            Swal.fire('Error', 'Hubo un problema al eliminar el arquero.', 'error');
          }
        });
      }
    });
  }

  
}
