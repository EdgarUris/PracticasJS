//Edgar urias

function decodeFilename(filename){
    let i = 0;
    //mientras en el filename haya numeros
    //ir aumentandolo hasta que se acaben los numeros
    //regex: /\algo/
    while(filename.charAt(i).match(/\d/)){
        i++;
    }
    i++; //para quitar el _ despues del numero

    //cortar los numeros
    filename = filename.slice(i);

    //sigue buscar el segundo punto en la extension
    //resetear i para volver a utilizarla
    i = 0;

    //un contador, al segundo punto es cuando esta la segunda extension y antes
    //de eso esta el fin de la primera extension

    //en los ejemplos decia que los archivos tendrian 2 extensiones btw
    //aunque pensandolo bien deberia funcionar aunque tuviera 6 o 7 extensiones
    let contadorPunto = 0;

    //mientras el contador del punto sea menor a 2
    while(contadorPunto < 2){
        //si hay un punto aumenta el contador
        if(filename.charAt(i).match(/\./)){
            contadorPunto++;
        }
        //aumentar el contador para saber la longitud final del archivo real
        i++;
    }

    //cortar desde la longitud del archivo real
    //hasta la longitud del archivo robado
    //i-1 para quitarle el punto de la otra extension malvada
    filename = filename.slice(0, i-1);
    return filename;
}

console.log(decodeFilename('2023122512345678_gameAssets.png.tmp'));
console.log(decodeFilename('42_user-data.json.backup'));
console.log(decodeFilename('987654321_level-1-config.csv.old'));