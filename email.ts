export class Email {
  private _tipo: string;
  private _email: string;

  constructor(tipo: string, email: string) {
    if (!this.esValido(email)) {
      throw new Error("El email no es válido.");
    }
    this._tipo = tipo;
    this._email = email;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public get email(): string {
    return this._email;
  }

  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public set email(email: string) {
    if (!this.esValido(email)) {
      throw new Error("El email no es válido.");
    }
    this._email = email;
  }

  private esValido(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
