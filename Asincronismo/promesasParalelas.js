const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTIONS = {crossDomain: true};


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
 * Async-await es la manera más simple y clara de realizar tareas asíncronas. 
 * Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. 
 * Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y 
 * encerrar el llamado a Promises.all() dentro de un bloque try … catch.
 */
async function obtenerPersonajes() {
    var ids = [1,2,3,4,4,6]; //Array con los ids de los personajes que vamos a llamar
    /**
     * La variable de promesas es un arreglo al cual le asignamos el metodo map sobre el array ids
     * esto para que nos regrese el arreglo con las promesas resueltas
     */
    var promesas = ids.map(id => obtenerPersonaje(id));
    try{
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    }catch (id){
        console.log(`Error al obtener el personaje ${id}`);
    }
    /**
     * Ya que tenemos nuestras promesas en paralelo hay que mostrarlas.
     * Para mostrar las promesas en paralelo se utiliza la sintaxis:
     *  donde all() recive un arreglo de promesas
     */
    // Promise
    //     .all(promesas)
    //     .then(personajes => console.log(personajes))
    //     .catch((id) => {
    //         console.log(`Error al obtener el personaje ${id}`);
    //     })
}

obtenerPersonajes();