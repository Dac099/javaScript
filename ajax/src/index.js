const URL = "https://jsonplaceholder.typicode.com/users";
//Se instancia un objeto XMLHttpRequest
let http = new XMLHttpRequest();
http.open("GET", URL);
http.onreadystatechange = function(event) {
    if(http.readyState == 4){
        if(http.status == 200){
            console.log(JSON.parse(http.responseText)[0]);
        }else{
            console.log("Error");
        }
    }
};
http.send();

