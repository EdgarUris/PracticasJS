//Edgar Urias, 261147

//estas son las funciones de la calculadora, son funciones flecha
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if(b === 0){
        console.log("no puedes dividir entre 0")
    }
    else{
        return a/b;
    }
};

//obtiene la respuesta dependiendo la operacion y la imprime
function calculadora(a, b, callback){
    let res = callback(a, b);
    console.log(`resultado: ${res}`);
}

calculadora(3, 4, sumar);
calculadora(5, 2, restar);
calculadora(10, 10, multiplicar);
calculadora(15, 3, dividir);
calculadora(100, 0, dividir);