/**
 * Vamos a usar un API (swapi) para hacer llamada de datos desde nuestro programa
 * Primero hacemos un request. Para hacer un request tenemos que acceder a la URL
 */
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

//Para hacer un request con jquery: $.get(URL)
//El URL que se utiliza es el mismo que declaramos como constante
//Como necesitamos llamar la URL completa a PEOPLE_URL le cambiamos ':id' por un id valido de URL
//El segundo parametro es para indicar que hacemos un request de otra pagina

/**
 * Vamos a declarar nuestro Callback
 * Un callback es una funcion que se ejecutara en el "futuro" cuando otra funcion la llame como parametro
 * 
 */
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`;
const OPTIONS = {crossDomain: true};

/**
 * La funcion $.get de jquery:
 * El primer parametro es la URL que formamos para hacer el request
 * El segundo parametro es data que es enviada al servidor con el request
 * El tercer parametro es un callback que se ejecuta si el request funciona
 * 
 * El parametro data en el callback es el objeto que se trae de la API
 */
$.get(LUKE_URL, OPTIONS, function(data){
    console.log(`Hola yo soy ${data.name}`);
});


