import { ArcoModel } from './arco.model';
import { CompetenciaModel } from './competencia.model';
import { EntrenamientoModel } from './entrenamiento.model';
export interface ArqueroModel {
  idArquero?: number;
  nombre: string;
  apellido: string;
  marcaPersonal: number;
  categoria: string;
  asociacion: string;
  arcos: ArcoModel[];
  entrenamientos: EntrenamientoModel[];
  competencias: CompetenciaModel[];
}
