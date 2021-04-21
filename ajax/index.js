function ajax(){
    const http = new XMLHttpRequest();
    const URL = "https://rickandmortyapi.com/api/character/1";
    http.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }
    }

    http.open("GET", URL);
    http.send();
}

ajax();