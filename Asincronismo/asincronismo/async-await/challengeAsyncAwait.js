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

const another = async (url_api) => {
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch(error){
        console.log(error);
    }
}

another();