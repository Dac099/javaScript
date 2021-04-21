const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        true
        ? setTimeout(() => {
            resolve("Do something async");
        }, 1000)
        : reject(new Error("oops!"));
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

doSomething();

const another = async () =>{
    try{
        const something = await doSomething();
        console.log(something);
    }catch(error){
        console.log(error)
    }
}


another();


function getData(){
    fetch("https://rickandmortyapi.com/api/character/1")
        .then(response => response.json)
        .then(json => {
            console.table(json);
        })
        .catch(error => {
            console.log(new Error("No se que paso"));
        })
}

getData();