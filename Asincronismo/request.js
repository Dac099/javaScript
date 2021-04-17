//Haciendo multiples request en paralelo
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTIONS = {crossDomain: true};



//Solucionar errores en caso de perder conexion
// function obtenerPersonaje(id, callback){
//     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
//     //Si la conexion falla o no se encuentra un objeto se puede encadenar una funcion
//     $
//         .get(url, OPTIONS, callback)
//         .fail(() => {
//         console.log(`No se pudo obtener la informacion del personaje ${id}`);
//     });
// }

//Vamos a crear una nueva funcion para obtner un personaje, pero con promesas.

function obtenerPersonaje(id){
    return new Promise((resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, OPTIONS, (data) => {
            resolve(data);
        })
        .fail(() => {
            reject(id);
        })
    });
}

/**
 * Cuando se ejecuta el codigo en js los datos mostrados en consola son en desorden ya que
 * la funcion es asincrona 
 */

// for(let i = 0; i < 3; i++){
//     obtenerPersonaje(i + 1);
// }

/**
 * Para mantener el orden de llamado e id de nuestra API podemos llamar secuencialmente a las funciones
 * Al hacer esto se pierde el paralelismo del sincronismo
 */

// obtenerPersonaje(1, function(person){
//     console.log(person.name);
// });


//Invocando la funcion de obtener personaje con promesas
obtenerPersonaje(1)
    .then((personaje) => {
        console.log(`El personaje es: ${personaje.name}`);
        return obtenerPersonaje(2);
    })
    .then((personaje) => {
        console.log(`El personaje es: ${personaje.name}`);
        return obtenerPersonaje(3);
    })
    .then((personaje) => {
        console.log(`El personaje es: ${personaje.name}`);
        return obtenerPersonaje(4);
    })
    .then((personaje) => {
        console.log(`El personaje es: ${personaje.name}`);
        return obtenerPersonaje(17);
    })
    .catch((id) => {
        console.log(`Error al obtener el personaje ${id}`);
    })

/**
 * El hacer varios callbacks como arriba presenta problemas de lectura. Eso se puede solucionar con promesas
 */

/**
 * Las promesas se pueden ver como valores que aun no se conocen.
 * Es la promesa de que ahi va haber un valor cuando una funcion asincrona se resuelva.
 * 
 * Tienen 3 estados:
 *  pending: Es el estado inicial de una promesa
 * 
 *  fulfilled: Es cuando la promesa se resuelve. Para obtener el valor de la promesa podemos llamar
 *  a la funcion .then()n que tiene coomo parametro una funcion con el valor esperado.
 *  Si se resuelve la promesa podemos volver a llamar una promesa.
 * 
 *  rejectec: Es el caso en que la promesa no se resuelva. Para obtener el error de una promesa rechazada
 *  usamos la funcion .catch() con un parametro que es el error que sucedio.    
 */



