var frutas = ["manzana","platano","pera","mango","mandarina","naranja"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
// Longitud de un array
console.log(frutas.length)
// Agregar elementos
var pedido = "papayas"
frutas.push(pedido)
console.log(frutas)
// Eliminando el ultimo elemento
frutas.pop()
console.log(frutas)
// Agregar primer elemento
frutas.unshift("sandia")
console.log(frutas)
// Eliminar elemento
frutas.shift()
console.log(frutas)
// Obtener el index
console.log(frutas.indexOf("pera"))

var david = {
    name : "David",
    height : 176,
    books : 32,
}
var juan = {
    name : "Juan",
    height : 180,
    books : 100,
}
var ramon = {
    name : "Ramon",
    height : 175,
    books : 80,
}
var dalila = {
    name : "Dalila",
    height : 160,
    books : 77,
}
var damon = {
    name : "Damon",
    height : 189,
    books : 66,
}
const esAlta = ({height}) => height >= 180;
// Filtrar elementos dentro de un array
var personas = [david,ramon,juan,dalila,damon];
var personasAltas = personas.filter(esAlta);
console.table(personasAltas);

const esBaja = ({height}) => height < 170;
var personaBajas = personas.filter(esBaja);
console.table(personaBajas);

// **Reducir un array a un numero
var acum = 0;
for (let i = 0; i < personas.length; ++i){
    acum = acum + personas[i].books;
}
console.log(`Libros totales ${acum}`);

// **Esta es una manera mas simple de hacerlo con el metodo reduce()
// const reducer = (acum,persona) => {
//     return acum + persona.books;
// }
// var totalLibros = personas.reduce(reducer, 0);
// console.log(totalLibros);
