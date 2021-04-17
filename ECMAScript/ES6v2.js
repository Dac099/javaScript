let obj = {
    name : "David",
    age : 21,
}
// Podemos congelar un objeto para que no sufra alteraciones
Object.freeze(obj);
// Si tratamos de cambiar sus propieades no va a surtir efecto
obj.name = "Juan";
obj.age = 23;
console.table(obj);

// Se pueden crear funciones en las que no tenemos que escribir todos lo parametros
function howMany(...nums){
    // Toma los parametros y los almacena en un arreglo
    return `Arguments: ${nums.length}
${nums[0]} - ${nums[1]} -  ${nums[2]} -  ${nums[3]}`
}
console.log(howMany("string", null, [1,2,3], {}));

// Renombrar propiedades mediante la desestructuracion
const user = {name: "David", age: 21};
const {name : userName, age:userAge} = user;
// Con estas linea userName va a tener el valor de user.name y userAge = user.age
console.log(userName);
console.log(userAge);

// En caso de que sean objetos anidados
const user1 = {
    david : {
        age : 21,
        email : 'davidcejazapata@gmail.com',
    }
}
const {david : {age, email}} = user1;
console.log(age, email);
// Se pueden renombrar
const {david : {age : userAge, email : userEmail}} = user1;
console.log(userAge, userEmail);

// Se pueden desestructurar arreglos con:
const [a,b,,,c] = [1,2,3,4,5,6];
// Con esta linea se asignan valores de un arreglo a nuestras variables
// a = 1, b = 2, c = 5
console.log(a,b,c);

// getter y setters*********************************************************************************
class Book { 
    // Por convension las variables privadas las precede un "_"
    constructor(author){
        this._author = author;
    }

    // getter
    // Sirve para obtener el valor de una propiedad que se establecio como privada
    get writer(){
        return this._author;
    }

    // setter
    // Nos ayuda a estabelecer valores a propiedades de objetos que son privadas.
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

var libro = new Book("Canitas");
console.log(libro.writer); //Se hace uso de la funcion get para obtener el autor que esta en privado
libro.writer = "Carlos Trejo"; //Se hace uso de la funcion set para cambiar el autor privado
console.log(libro.writer);

//Exportar e importar ********************************************************************************

//Para exportar:
function  saludar(){
    console.log("Hola, neni");
}

// Para exportar valores que retornan funciones les agregamos el "export default"
export default function sum(a,b){
    return a + b;
}

// Se usa la plabra reservada "export"
export {saludar};

//Par importar
/**
 * import {saludar} from "./FileName.js"
 * 
 * Para importar un default:
 * import sum from "./FileName.js"
 * 
 * Para importar todo, tambien podemos renombrar el objeto con el que llamamos a las funciones
 * import * as ObjectName from "./FileName"
 */

//Promesas en JS**************************************************************************************
/**
 * Las promesas en JS son funciones que en determinado punto se van a ejecutar 
 * Es como si prometieras que algo se va a ejecutar
 * 
 * La promesa tiene 3 estados: pending fulfilled, rejected.
 * 
 * resolve: se usa cuando se quiere que la promesa se cumpla
 * reject: se usa cuando se quiere que la promesa falle
 */
const myPromise = new Promise((resolve,reject) =>{
    if(true){
        resolve("Promise was fulfilled");
    }else{
        reject("Promise was rejected");
    }
});

//Cuando la promesa se cumple se usa la palabra reservada "then"
//result viene del parametro que se le paso a al metodo resolve
myPromise.then(result => {
    console.log(result);
});

//Si la promesa falla se ejecuta con la palabra resercada "catch"
//catch viene del parametro reject
myPromise.catch(error => {
    console.log(error);
})