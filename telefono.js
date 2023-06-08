"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "Tipo", {
        // Métodos para acceder a los atributos
        get: function () {
            return this.tipo;
        },
        // Métodos para modificar los atributos
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "Numero", {
        get: function () {
            return this.numero;
        },
        set: function (numero) {
            this.numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
