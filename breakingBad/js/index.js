//URL para manipular la APi
let url = "https://www.breakingbadapi.com/api/characters";
//Leemos el nodo que sirve como boton para agregar personajes
let button = document.querySelector('.button');
//Se instancia un objeto de XMLHttpReques
let request = new XMLHttpRequest();
//Declaramos una promesa en donde se hace la peticion http por medio de XMLHttpRequest
const fetchData = (url) =>{
    return new Promise((resolve,reject) => {
        request.open('GET', url);
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status === 200){
                    //Si la promesa se cumple, la respuesta de la peticion se transforma a un objeto
                    resolve(JSON.parse(request.responseText));
                }else{
                    reject(new Error('Error!'));
                }
            }
        }
        request.send();
    });
}

fetchData(url, Number)
.then(data => {
    let characters = data;
    button.addEventListener('click', () => {
        console.log(characters[0].name);
    });
    
})
.catch(error => {
    console.log(error);
})

// function addCharacter(){
//     //Agregar los nodos al DOM
// }
//Agregamos un escucha para cuando lo seleccionen