//Edgar Urias, 261147

//funciones que representan una acción en la receta
function cortarIngredientes(ingredientes, callback){
    setTimeout(() => {
        console.log(`cortando: ${ingredientes}`);
        callback();
    }, 2500);
}

function cocinar(accion, callback){
    setTimeout(() => {
        console.log(`cocinando: ${accion}`);
        callback();
    }, 3500);
}

//funcion final porque ya no tiene callbacks
function servirPlato(plato){
    console.log(`Servido, ya puedes disfrutar de tu: ${plato}`);
}

//en preparar receta se van agregando las funciones de callback en orden
function prepararReceta(plato, callback){
    console.log(`iniciamos la preparacion de: ${plato}`);

    cortarIngredientes("vegetales", () => {
        cocinar("sazonar vegetales", () => {
            cocinar("cocer pollo", () => {
                cortarIngredientes("pollo cocido", () => {
                    cocinar("poner aderezo", () => {
                        cocinar("mezclar todo", () => {
                            servirPlato(plato);
                            callback();
                        })
                    })
                })
            })
        })
    }); 
}

//probar la receta
prepararReceta("Ensalada de pollo", () => {
    console.log("receta terminada, buen provecho");
});