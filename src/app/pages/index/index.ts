import { Component } from '@angular/core';
import { InfoCardSimple } from "../../components/info-card-simple/info-card-simple";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArqueroService } from '../../services/arquero-service';
import { ChangeDetectorRef } from '@angular/core';
import { ArqueroModel } from '../../services/arquero.model';

@Component({
  selector: 'app-index',
  imports: [InfoCardSimple, FormsModule, RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

  inputValue: string = '';
  arqueros: ArqueroModel[] = [];

  constructor(private service: ArqueroService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.arqueros = data;
        console.log('Datos recibidos:', data);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

}
