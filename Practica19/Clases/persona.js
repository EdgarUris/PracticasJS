//clase padre, utiliza el default en el export para poder importarlo 
//sin necesidad de los {}

export default class Persona{
    //constructor de la clase persona
    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId();
    }

    //# es para un metodo privado
    #generarId(){
        return Math.floor(Math.random() * 1000);
    }

    //metodo publico
    saludar(){
        return `Hola, soy ${this.nombre}`;
    }
}