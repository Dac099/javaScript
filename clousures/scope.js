//Decide a que bloque de codigo va una variable
//El scope es el alcance de las variables


//Global scope
//Podemos acceder a estas variables desde todo el programa
var hello = "Hello";    //Con var podemos reasignar variables
let world = "Hello, world"; //let y const no permite volver a declarar variables con el mismo nombre
const helloWorld = "Hello World";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();


//Local scope
// Solo se puede acceder desde el bloque de codigo en el que se declara
const name = "Soy global";
const helloWorld = () => {
    const name = "Soy local";
    const printName = () => {
        return name;
    }
    console.log(printName());
}
helloWorld(); //Imprime "Soy local"
console.log(name); //Imprime "Soy global"

//Function scope
const fruits = () => {
    //La variables solo puede ser usada dentro de esta funcion
    var fruit = 'apple';
}


//Block scope
/**
 * En este caso dentro de la funcion solo podemos accedes a fruits1 ya que se declaro con var
 * fruits1 y fruits3 no puden ser usadas en la funcion ya que se delcararon dentro
 * del bloque del if. Aunque esten dentro de la funcion.
 */
const food = () => {
    if (true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'orange';
    }
    console.log(`${fruits1} ${fruits2} ${fruits3}`);
}

food();