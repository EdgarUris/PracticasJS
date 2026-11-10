//Edgar Urias, 261147

//esta funcion solo imprime un mensaje
function principal(){
    console.log("temporizador terminado");
}

//el temporizador recibe la funcion principal y espera 3 segundos para ejecutarla
function temporizador(callback){
    setTimeout(() => {
        callback();
    }, 3000);
    console.log("espera 3 segundos");
}

temporizador(principal);