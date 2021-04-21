// ES6 parametros por defecto
function newFunction2 (name = "David", age = 32, country = "MX"){
    console.log(name, age, country);
}

// Template literal
let phrase = `${hello} ${world}`;
console.log(phrase);

// Multilinea
let lorem = `Otra frase que necesitamos
ahora es otra frase epica`;
console.log(lorem);

// Desestructuracion
let person = {
    "name1": "David",
    "age": 32,
    "country": "MX",
}
// Extraer los datos necesarios de un objeto
let {name1, age, country} = person;
console.log(name1, age, country);

// Propagacion
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["David", "Diego", "Aby"];

let education = ["Juan", ...team1, ...team2];
console.table(education);

// Objetos
let cosa = "telefono";
let precio = 3200;

obj2 = {cosa, precio};
console.log(obj2);

// Arrow functions
const names = [{names_: "David", age_:21},{names_: "Juan", age_: 33}];
let listOfNames = names.map(item => console.log(item.names_));

const listOfName2 = (names_, age_) => {
    // Codigo de la funcion
}
const listOfName3 = names_ => {
    //  codigo
}
const squeare = num => num * num;

// Promesas
// Con las promesas se trabaja el asincronismo
const helloPromise = () => {
    // La promesa va a resolver o va a ser rechazada
    return new Promise((resolve,reject) => {
        if (true){
            resolve("Hey!");
        }else{
            reject("Oops!");
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


// Clases, Modulos y Generadores
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator;
console.log(calc.sum(2, 2));

// Modulos
// La forma nueva de importar modulos es con:
// import hello from "./module"
const hello = require("./module");
console.log(hello());

// Generators
function* helloWorld(){
    if(true){
        yield "Hello ";
    }
    if(true){
        yield "world";
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
