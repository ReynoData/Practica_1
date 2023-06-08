export class Telefono {
  private tipo: string;
  private numero: number;

  constructor(tipo: string, numero: number) {
    this.tipo = tipo;
    this.numero = numero;
  }

  // Métodos para acceder a los atributos
  public get Tipo(): string {
    return this.tipo;
  }

  public get Numero(): number {
    return this.numero;
  }

  // Métodos para modificar los atributos
  public set Tipo(tipo: string) {
    this.tipo = tipo;
  }

  public set Numero(numero: number) {
    this.numero = numero;
  }
}
