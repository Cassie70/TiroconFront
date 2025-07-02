import { DistanciaModel } from './distancia.model';

export interface EntrenamientoModel{
  idEntrenamiento?: number;
  fecha: string;
  distancias: DistanciaModel[];
  arquero: {
    idArquero: number;
  }
}
