import Persona from "./persona.js"

//el estudiante es hijo de la clase persona, el super insancia los atributos del padre
export default class Estudiante extends Persona{
    constructor(){
        super();
        this.carrera = ""; //y se pueden agregar más utilizando el this.
    }

    estudiar(){
        return `${this.nombre} está estudiando ${this.carrera}`;
    }

    #calcularPromedio(){
        return 65;
    }

    verPromedio(){
        return `Promedio: ${this.#calcularPromedio}`;
    }

}