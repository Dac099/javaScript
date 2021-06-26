//URL para manipular la APi
let url = "https://www.breakingbadapi.com/api/characters";

//Leemos el nodo que sirve como boton para agregar personajes
let button = document.querySelector('.button');

//La variable mount es el elemento <main> del HTML
let mount = document.querySelector('.mount');

//Se instancia un objeto de XMLHttpReques
let request = new XMLHttpRequest();

/**
 * Funcion que crea filas de una tabla HTML
 * 
 * El primer parametro es la cadena que indica el elemento de la fila
 * El segundo parametro es una variable que indica la descripcion del elemento
 * 
 * La funcion regresa el el elemento <tr></tr>
 */
function rowsMaker(info,description, head = false){
    let tableRowCard = document.createElement("tr");
    let tableInfoCard = document.createElement("td");
    tableInfoCard.classList.add('card-description');
    let tabledescriptionCard = document.createElement("td");
    tabledescriptionCard.classList.add('card-info');

    if(head){
        let tableHeadCard = document.createElement("th");
        tableHeadCard.append("About");
        tableHeadCard.colSpan = 2;
        tableRowCard.append(tableHeadCard);
        
        return tableRowCard;
    }

    tableInfoCard.append(info)
    tableRowCard.append(tableInfoCard);

    tabledescriptionCard.append(description);
    tableRowCard.append(tabledescriptionCard);


    return tableRowCard;
}


//Funcion que crea la tarjeta del personaje
function tableMaker(name,nickName,status){
    //Se crea el contenedor y los elementos de la tabla
    let tableCard = document.createElement("table");
    let tableRowCard = document.createElement("tr");
    let tableHeadCard = document.createElement("th");

    //Variable que almacena las filas de la tabla
    let rowsTable = [];
    
    //Sea crea el head de la tabla
    rowsTable.push(rowsMaker(null,null, true));

    //Se crea la fila de nombre
    rowsTable.push(rowsMaker("Name",name));

    //Se crea la fila del nickName
    rowsTable.push(rowsMaker("nickName",nickName));

    //Se crea la fila del status
    rowsTable.push(rowsMaker("status",status));
    
    //A la tabla se le agregan los nodos creados
    tableCard.append(...rowsTable);
    
    return tableCard;
}

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

//Llamado de la promesa para empezar a manipular la informacion extraida
fetchData(url, Number)
.then(data => {
    let characters = data;
    console.log(characters);

    let control = 0;

    let tableCard = document.createElement('table');
    button.addEventListener('click', () => {
        console.log(characters[control].name);
        
        tableCard = tableMaker(characters[control].name,characters[control].nickname,characters[control].status);
        control++;
        button.insertAdjacentElement('afterend',tableCard);
    });
    
})
.catch(error => {
    console.log(error);
})

