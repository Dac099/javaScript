let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {    //Declaramos nuestra promesa
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); 
        xhttp.onreadystatechange = (event) => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error("oops!"));
            }
        }
        xhttp.send();
    });
}
 
fetchData(API)  //Llamamos a nuestra funcion
    .then(data => { //Si se resuelve nuestra promesa se ejecuta el primer .then
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);    //Regresamos un nuevo llamado a la funcion en donde se encadena la nueva URL
    })
    .then(data => { //Se ejecuta la segunda promesa y se retorna una nueva URL
        console.log(data.name);
        return fetchData(data.origin);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => {
        console.log(error);
    })