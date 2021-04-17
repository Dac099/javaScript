/**
 * con el metodo flat vamos a extraer los subelementos de un arreglo anidado para dejar todos los 
 * valores a un nivel.
 * 
 * El parametro de flat es para indicar el nivel de aplanado 
 * 
 * Para este arreglo se necesitan 2 niveles
 */
let array = [1,2,3,[4,5,6,[7,8,9]]];
console.log(array.flat());

/**
 * Nos permite mapear un objeto y a cada objeto aplicarle una funcion
 */
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));


/**
 * Con esta funcion podemos eliminar espacios en blanco de una cadena al inicio o al final
 */
let hello = "               hello world             ";
console.log(hello);
console.log(hello.trimStart());

let hello = "Hello world            ";
console.log(hello);
console.log(hello.trimEnd());

/**
 * Nos devuelve un objeto a partir de un arreglo de arreglo
 */
let entries = [["name", "Oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);