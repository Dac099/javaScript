const URL = "https://jsonplaceholder.typicode.com/users";
//Se instancia un objeto XMLHttpRequest
let http = new XMLHttpRequest();
http.open("GET", URL);

//La funcion onload tiene el mismo resultado que usar el codigo comentado
http.onload = () => {
    const json = JSON.parse(http.responseText);
    console.log(json);
}
// http.onreadystatechange = function(event) {
//     if(http.readyState == 4){
//         if(http.status == 200){
//             console.log(JSON.parse(http.responseText)[0]);
//         }else{
//             console.log("Error");
//         }
//     }
// };
http.send();

