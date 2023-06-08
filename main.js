"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var email_1 = require("./email");
var telefono_1 = require("./telefono");
// Crear algunas instancias de personas
var persona1 = new persona_1.Persona("Juan", "Pérez", 25, "6523654", 1987 - 08 - 09, "black", "F", new direccion_1.Direccion("Calle 1", 5, 4, "C", "25021", "Madrid", "Madrid"), new email_1.Email("personal", "juan.perez@example.com"), new telefono_1.Telefono("privado", 123456789), "primera persona");
// Mostrar los registros de personas en la consola
console.log("Registro 1:");
console.log(persona1);
