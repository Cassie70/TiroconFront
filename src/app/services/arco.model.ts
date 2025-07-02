export interface ArcoModel{
  idArco?: number;
  tipo: string;
  marca: string;
  libraje: number;
  apertura: number;
  peso: number;
  arquero: {
    idArquero: number;
  }
}
