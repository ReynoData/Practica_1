/* Clase Persona con los atributos:  */

import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Email } from './email';

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleanos: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private emails: Email[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], emails: Email[], telefonos: Telefono[], notas: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.emails = emails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  // Métodos para acceder a los atributos
  public get Nombre(): string {
    return this.nombre;
  }

  public get Apellidos(): string {
    return this.apellidos;
  }

  public get Edad(): number {
    return this.edad;
  }

  public get DNI(): string {
    return this.dni;
  }

  public get Cumpleanos(): Date {
    return this.cumpleanos;
  }

  public get ColorFavorito(): string {
    return this.colorFavorito;
  }

  public get Sexo(): string {
    return this.sexo;
  }

  public get Direcciones(): Direccion[] {
    return this.direcciones;
  }

  public get Emails(): Email[] {
    return this.emails;
  }

  public get Telefonos(): Telefono[] {
    return this.telefonos;
  }

  public get Notas(): string {
    return this.notas;
  }

  // Métodos para modificar los atributos
  public set Nombre(nombre: string) {
    this.nombre = nombre;
  }

  public set Apellidos(apellidos: string) {
    this.apellidos = apellidos;
  }

  public set Edad(edad: number) {
    this.edad = edad;
  }

  public set DNI(dni: string) {
    this.dni = dni;
  }

  public set Cumpleanos(cumpleanos: Date) {
    this.cumpleanos = cumpleanos;
  }

  public set ColorFavorito(colorFavorito: string) {
    this.colorFavorito = colorFavorito;
  }

  public set Sexo(sexo: string) {
    this.sexo = sexo;
  }

  public set Direcciones(direcciones: Direccion[]) {
    this.direcciones = direcciones;
  }

  public set Emails(emails: Email[]) {
    this.emails = emails;
  }

  public set Telefonos(telefonos: Telefono[]) {
    this.telefonos =telefonos;
  }

  public set Notas(notas: string) {
    this.notas = notas;
  }
}