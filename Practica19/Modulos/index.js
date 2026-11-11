//clase de pruebas de los imports
//Edgar Urias 261147


import {saludar as saludo, PI, config} from './recursos.js' //se importa como en un arreglo
//o utilizando el * se importa todo
//tambien poniendole as se puede instanciarle un nombre a ese import

console.log(saludo("AAA"))
console.log("Este es el valor de pi: ", PI);
console.log("esta es la url de la api: ", config.URL_API)