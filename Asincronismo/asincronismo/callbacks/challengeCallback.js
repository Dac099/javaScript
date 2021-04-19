// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character';

function fetchData(url_api,callback){
    let xhttp = new XMLHttpRequest();
    /**
     * El metodo open() de xmlhttprequest tiene 5 parametros:
     *  1. [method] el metodo HTTP a usar
     *  2. [url] url a la que se envia el pedido
     *  3. [async] booleano que indica si se debe de realizar la operacion de forma asincrona
     *  4. [user] nombre de usuario, es  opcional
     *  5. [password] contrasena, es opcional
     */
    xhttp.open('GET', url_api, true);   
    /**
     * onreadystatechange() Define una funcion que va a ser llamada cuando readySate cambie
     * 
     * "readyState" mantiene el estado de XMLHttpRequest:
     *  [0] request no inicializado
     *  [1] conexion establecida con el servidor
     *  [2] request recivido
     *  [3] procesando request
     *  [4] request finalizado y respuesta lista.
     * 
     * "responseText" retorna la informacion de respuesta en forma de cadena
     * 
     * "status" retorna el estado del request:
     *  [200] Todo salio bien "OK"
     *  [403] "Forbidden"
     *  [404] "Not Found"]
     *  Tiene varias respuestas...
     */
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                /**
                 * En un callback primero se puede pasar un error como primer parametro en caso de que lo haya
                 * Desde el segundo parametro se puede deplegar toda la informacion que se va usar.
                 * 
                 * El callback:
                 *  [null] es el error que se va a mostrar si algo sale mal
                 *  [JSON.parse(xhttp.responseText)]:
                 *      [responseText] es una propiedad de XMLHttpRequest que regresa informacion obtenida del request en forma de cadena
                 *      [JSON.parse()] sirve para analizar una cadena de texto y tratarla como JSON. El parametro que se le pasa es la cadena de texto que se va a transformar a JSON
                 */
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}


//data# en el callback representa JSON.parse(xhttp.responseText)
//error# representa es el error que se va a manejar en caso de que nuestro callback falle

//API representa "https://rickandmortyapi.com/api/character" que es la URL que le vamos a pasar al primer fetchData
//data1 representa a TODO el objeto JSON de la API
fetchData(API,function(error1, data1){
    if(error1){
        return console.error(error1);
    }
    //Si no hay ningun error volvemos a llamar a nuestra funcion
    
    //La url que se le va a pasar al segundo fetchData es "https://rickandmortyapi.com/api/character/1"
    //data2 representa al objeto que esta en la primer posicion (0) del arreglo que esta en la segunda propiedad de TODO el objeto JSON
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2){
            return console.error(error2);
        }
        //La URL que se le va a pasar a fetchData es "https://rickandmortyapi.com/api/location/1" la cual es otra URL que viene dentro de nuestro data2
        //data3 representa al objeto de la URL de data2
        fetchData(data2.origin.url, function(error3, data3){
            if(error3){
                return console.error(error3);
            }
            console.log(data1.info.count);  //Accedemos a todo el JSON de la API en la segunda propiedad del primer objeto que es la primer propiedad del JSON
            console.log(data2.name);        //Accedemos al JSON del primer elemento del arreglo que es la segunda propiedad
            console.log(data3.dimension);
        });
    });
});