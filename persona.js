"use strict";
/* Clase Persona con los atributos:  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, emails, telefonos, notas) {
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
    Object.defineProperty(Persona.prototype, "Nombre", {
        // Métodos para acceder a los atributos
        get: function () {
            return this.nombre;
        },
        // Métodos para modificar los atributos
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellidos", {
        get: function () {
            return this.apellidos;
        },
        set: function (apellidos) {
            this.apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this.edad;
        },
        set: function (edad) {
            this.edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this.dni;
        },
        set: function (dni) {
            this.dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Cumpleanos", {
        get: function () {
            return this.cumpleanos;
        },
        set: function (cumpleanos) {
            this.cumpleanos = cumpleanos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "ColorFavorito", {
        get: function () {
            return this.colorFavorito;
        },
        set: function (colorFavorito) {
            this.colorFavorito = colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Sexo", {
        get: function () {
            return this.sexo;
        },
        set: function (sexo) {
            this.sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Direcciones", {
        get: function () {
            return this.direcciones;
        },
        set: function (direcciones) {
            this.direcciones = direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Emails", {
        get: function () {
            return this.emails;
        },
        set: function (emails) {
            this.emails = emails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Telefonos", {
        get: function () {
            return this.telefonos;
        },
        set: function (telefonos) {
            this.telefonos = telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Notas", {
        get: function () {
            return this.notas;
        },
        set: function (notas) {
            this.notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
