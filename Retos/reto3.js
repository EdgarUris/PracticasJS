

function organizeShoes(shoes = []){
    //definir variables
    let resultado = [];

    //la i es para acceder siempre al primer elemento
    const i = 0;
    //copia de shoes
    const zapatos = [...shoes];

    //mientras aun haya zapatos en el arreglo de entrada
    while(zapatos.length !== 0){

        //definir el tamaño del primer zapato encontrado
        let tam = zapatos[i].size;
        //booleano que cambiará al encontrar el par
        let encontroPar = false;

        //para el resto de zapatos ir comparando si es del mismo tamaño al actual
        //y si el tipo es diferente, ya que solo hay L o R
        for(let j = i+1; j < zapatos.length; j++){
            if(zapatos[j].size === tam && zapatos[j].type !== zapatos[i].type){
                    //si encuentra un par, agrega el tamaño al resultado
                    //y quita los zapatos del mismo tamaño para seguir buscando en ellos
                    resultado.push(zapatos[i].size)

                    //splice para eliminar solo ese zapato, como cortar el pedazo desde
                    //i o j hasta i+1 o j+1
                    zapatos.splice(j, 1);
                    zapatos.splice(i, 1);
                    encontroPar = true;
                    //y termina el ciclo para no eliminar mas de 2 zapatos que coincidan
                    break;
                }
        }
        //si no encuentra un zapato del mismo tamaño y diferente tipo solo elimina el zapato
        if (!encontroPar) {
            zapatos.splice(i, 1);
        }
    }
    return resultado;
}

const shoes = [
{ type: 'I', size: 38 },
{ type: 'R', size: 38 },
{ type: 'R', size: 42 },
{ type: 'I', size: 41 },
{ type: 'I', size: 42 }
]

console.log(organizeShoes(shoes));

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes2));

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3));