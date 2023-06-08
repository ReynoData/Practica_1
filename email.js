"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email(tipo, email) {
        if (!this.esValido(email)) {
            throw new Error("El email no es válido.");
        }
        this._tipo = tipo;
        this._email = email;
    }
    Object.defineProperty(Email.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            if (!this.esValido(email)) {
                throw new Error("El email no es válido.");
            }
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Email.prototype.esValido = function (email) {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    return Email;
}());
exports.Email = Email;
