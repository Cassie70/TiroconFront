export interface CompetenciaModel {
  idCompetencia: number;
  nombre: string;
  fechaInicio: string;
  fechaTermino: string;
  puntajeClasificatorio: number;
  posicionClasificatorio: number;
  posicionROI: number;
  maximoROI: number;
  arquero: {
    idArquero: number;
  }
}
