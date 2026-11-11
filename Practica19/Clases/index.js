//clase de pruebas para la POO en js

import Estudiante from "./estudiante.js";

let estudiante = new Estudiante(); //asi se crea un nuevo objeto 
estudiante.nombre = "Edgar";
estudiante.carrera = "ISW";
console.log(estudiante);
console.log(estudiante.saludar());
console.log(estudiante.verPromedio());