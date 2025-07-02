import { SerieModel } from './serie.model';

export interface DistanciaModel {
  idDistancia: number;
  metros: number;
  entrenamiento: {
    idEntrenamiento: number;
  }
  series: SerieModel[];
}
