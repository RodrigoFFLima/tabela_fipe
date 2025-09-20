export interface FipeItem {
  nome: string;
  codigo: string;
}

export interface Marca extends FipeItem {}
export interface Modelos extends FipeItem {}
export interface Anos extends FipeItem {}
