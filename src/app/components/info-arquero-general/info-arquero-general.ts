import { Component, Input } from '@angular/core';
import { ArqueroModel } from '../../services/arquero.model';
import { ArqueroService } from '../../services/arquero-service';

@Component({
  selector: 'app-info-arquero-general',
  imports: [],
  templateUrl: './info-arquero-general.html',
  styleUrl: './info-arquero-general.css'
})
export class InfoArqueroGeneral {
  @Input() arquero: ArqueroModel = {
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


  constructor(private arqueroService: ArqueroService) { }

  descargarPDF(): void {
    console.log('Generando PDF para arquero con ID:', this.arquero.idArquero);
    if (!this.arquero.idArquero || this.arquero.idArquero <= 0) {
      console.error('ID de arquero inválido:', this.arquero.idArquero);
      return;
    }
    this.arqueroService.getPDF(this.arquero.idArquero).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `arquero_${this.arquero.idArquero}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error al generar PDF:', error);
      }
    });
  }


}
