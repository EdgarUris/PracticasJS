/*
al analizar el reto me di cuenta de cosas como:
el ancho total de la torre de poder, es decir, cuantos caracteres tendrá en su nivel más bajo, es igual
a el nivel * 2 - 1, por lo que para una torre de 5 niveles, en su nivel más bajo tendrá 9 caracteres, y para 
una torre de 9 tendrá 17 caracteres.

manipular estos strings no se ve tan facil, ya que se deben editar desde el medio hacia afuera, tambien
hay que tener 2 punteros hacia esos extremos

para mi fue mas facil hacerlo con un enfoque de arreglos

*/


function createPowerTower(nivel = 5, caracter = "*"){
    //validar que sea de nivel 1 a 100
    if(nivel < 1 || nivel > 100){
        return "La torre debe tener entre 1 y 100 niveles";
    }

    //el ancho define cuantos caracteres tendrá el nivel más bajo
    const nAncho = (nivel*2) - 1;

    //utilicé un arreglo de niveles, aqui solo se van cambiando los 2 extremos al lado del medio
    let niveles = [];

    //los extremos se ponen en el medio del arreglos y tambien se define el string de salida 
    let ext1 = nivel-1;
    let ext2 = ext1;
    let salida = "";
    
    //agregar el numero de elementos definidos por el ancho calculado previamente
    for(let i = 0; i < nAncho; i++){
        niveles.push("_")
    }

    //poner justo en el medio el caracter del parametro
    niveles[nivel-1] = caracter;

    //mientras no se llegue al primer elemento del arreglo, que es el extremo del arbol
    while(ext1 >= 0){
        //cambiar los punteros y definir la linea de esta vuelta como vacia para llenarla de nuevo
        ext1 = ext1 - 1;
        ext2 = ext2 + 1;
        let linea = "";

        //para cada caracter en nivel, se concatena a la linea de la vuelta
        niveles.forEach(c => linea +=c);
        //se concatena el salto de linea al final
        linea = linea+"\n";

        //se actualizan los valores en los extremos para que tambien sean el caracter
        niveles[ext1] = caracter;
        niveles[ext2] = caracter;

        //se agrega a la salida la linea de esta iteración
        salida = salida + linea;
    }

    //se cambian todos los elementos por una _
    niveles.fill("_");

    //por algun motivo en la base de salida siempre tenia un _ de más
    //no tengo idea de porque, queria hacer en principio un niveles[nivel-1] = "#"
    //pero parece que agregaba otro elemento a la lista y terminana con 1 _ de mas
    //por eso me vi obligado a hacer un pop para sacar ese _ de mas al final
    niveles.pop();
    niveles[nivel-1] = "#";

    //la base de salida, se agregan todos los elementos de la lista a la base
    let base = "";
    niveles.forEach(c => base +=c);

    //como son 2 lineas de base, concatené 2 con un salto de linea incluido
    salida = salida + base + "\n" + base;
    
    return salida;

}

const torre = createPowerTower(8);
console.log(torre);

