//Edgar Urias 261147
//para probar las promesas en js

function obtenerDatosDelServidor(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let exito = true;

        if(exito){
            let usuario = {
                nombre: "Israel",
                edad: 20
            }
            resolve(usuario);
        }else{
            reject("Ocurrió un error al obtener los datos");
        }
    }, 2000);
    });
}

//los .then indican que se obtuvo en la promesa un resolve
//los .catch indican que se obutov un reject
//el finally se ejecuta independientemente de si salio bien o no
obtenerDatosDelServidor()
.then(resp => {
    return resp.nombre.toUpperCase();
})
.then(nombreEnMayus => {
    console.log("Nombre en mayusculas: ",nombreEnMayus);
}) //se le pueden concatenar los .then que quieras 
.catch(err => {
    console.log("Entró en el .catch, tarea fallida");
})
.finally(() => {
    console.log("Fin de la tarea");
})

//el async es para esperar la promesa del fetch
async function obtenerPosts(){
    try{
        //sin el await aqui, se correria el console.log sin el objeto response obtenido
        //el await espera a que la petición llegue
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response);
    }
    catch(error){
        //aqui se podria hacer algo mas por si la api esta caida
    }
    finally{
        //accion que hará salga bien o mal
    }

}

obtenerPosts();