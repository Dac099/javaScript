const data = {
    front: "david",
    back: "Juan",
    design: "Ana",
}
//Se agrego la funcion entries que nos retorna un areglo de arreglos de un objeto dado
const entries = Object.entries(data);
console.log(entries);

//Podemos obtener los valores de nuestro objeto en un arreglo con:
const VALUES = Object.values(data);
console.log(VALUES);

//Se agregaron metodos para agregar elementos al final y al inicio de una cadena.
const str = "mundo";
console.log(str.padStart(10, "Hola "));
console.log(str.padEnd(6,'2'));


//Async Await
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve("hello world"), 3000)
        : reject(new Error("test error"));
    });
}
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
}
anotherFunction();