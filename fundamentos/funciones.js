"strict";
var nombre = "David", edad = 21;

// **Declaracion de las funciones
function saludar(name, age)
{
    console.log(`Nombre: ${name}  Edad: ${age}`);
}
saludar(nombre, edad);
saludar("Josue", 33);

//** retorno de funciones
function mayorDeEdad(edad)
{
    return edad > 18;
}
console.log(mayorDeEdad(edad))

// **Funciones flecha en JS
const MAYORIA_DE_EDAD = 18;
var user = {
    name : "David",
    age : 21,
    ocupation : "student",
    work : false,
}
console.log(user.age);

// Las dos declaraciones de funciones flecha obtienen el mismo resultado

// var esMayorDeEdad = function(user){
//     return user.age > MAYORIA_DE_EDAD;
// }


// const esMayorDeEdad = user => user.age >= MAYORIA_DE_EDAD;

// Desestructurando el obejeto
const esMayorDeEdad = ({age}) => age >= MAYORIA_DE_EDAD;

if (esMayorDeEdad(user)){
    console.log("Es mayor de edad");
}else{
    console.log("No es mayor de edad");
}
