export class Categoria {
  id: number;
  descripcion: string;
  public borrada: boolean = false;

  constructor(id: number, descripcion: string){
    this.id = id;
    this.descripcion = descripcion;
  }
}
