export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;
  private _letra: string;
  private _codigoPostal: string;
  private _poblacion: string;
  private _provincia: string;

  constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: string, poblacion: string, provincia: string) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  // Métodos para acceder a los atributos
  public get calle(): string {
    return this._calle;
  }

  public get numero(): number {
    return this._numero;
  }

  public get piso(): number {
    return this._piso;
  }

  public get letra(): string {
    return this._letra;
  }

  public get codigoPostal(): string {
    return this._codigoPostal;
  }

  public get poblacion(): string {
    return this._poblacion;
  }

  public get provincia(): string {
    return this._provincia;
  }

  // Métodos para modificar los atributos
  public set calle(calle: string) {
    this._calle = calle;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  public set piso(piso: number) {
    this._piso = piso;
  }

  public set letra(letra: string) {
    this._letra = letra;
  }

  public set codigoPostal(codigoPostal: string) {
    this._codigoPostal = codigoPostal;
  }

  public set poblacion(poblacion: string)  {
    this._poblacion = poblacion;
  }

  public set provincia(provincia: string) {
    this._provincia = provincia;
  }
}