export interface FipeItem {
  nome: string;
  codigo: string;
}

export interface Marca extends FipeItem {}
export interface Modelos extends FipeItem {}
export interface Anos extends FipeItem {}

export interface Veiculo {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}
