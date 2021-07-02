
/**
 * Metodo .foreach( callback(currentValue, index, array) );
 * Callback - Funcion a ejecutar por cada elemento
 * CurrentValue - El elemento actual siendo procesado por el Array
 * Index - Indice del elemento actual siendo procesado por el array
 * Array - El vector en el que ForEach() esta siendo aplicado 
 * 
 */
let numbers = [2,4,6,8,10,12];
numbers.forEach((item, index) => {
    console.log(item,index);
});


/**
 * Metodo every(callback(element[, index[, array]])[, thisArg])
 * Element - The current value
 * Index - The index of the current element
 * Array - The array every was called
 * 
 * Executes the callback function once for each element in the array until the one
 * callback return a false. If every value in the array pass the test of a condition 
 * in the callback, it will return true.
 */
let numbers = [1,2,3,4,5,6,7,8,9];
let booleanValue = numbers.every(item => {
    return item < 10;
});
console.log(booleanValue);


/**
 * Metodo fill(value, start, end)
 * value - value to fill the array with
 * Start - star index, default 0
 * End -  end index, default array.length
 * 
 * Return modified array, filled with value
 */
let stuff = ['pen', 'notebook', 'keyboard', 'coffee', 'computer'];
stuff.fill('Hi',1,4);
console.log(stuff);


/**
 * Method filter((element, index, array) => { ... } )
 * Element - current element being processed in the array
 * Index - inde of the current element
 * Array - the array filter was called
 * 
 * Creates a new array with all the elements thah pass the test implementes by the 
 * provided function.
 */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

 /**
  * Method find((element, index, array) => { ... } )
  * Element - current element being processed in the array
  * Index - index of the current element
  * Array - the array filter was called
  * 
  * returns the value of the first element in the array that satisfies 
  * the provided testing function. Return undefined if no values satisfy the testing
  * function.
  */
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);


/**
 * Method findIndex((element, index, array) => { ... } )
 * Element - current element being processed in the array
 * Index - index of the current element
 * Array - the array filter was called
 * 
 * Return the index of the first element that satisfies the provided
 * testing function.
 */
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));


/**
 * Metodo map((element, index, array) => { ... } )
 * Element - current element being processed in the array
 * Index - index of the current element
 * Array - the array filter was called
 * 
 * Returns a new array with the result of calling a provided function on every element.
 */
let names = ['Juan', 'Marcos', 'Lena', 'Sergio'];
let htmlNames = names.map( (item) => {
    return `<div>${item}</div>`;
});
console.log(htmlNames);


/**
 * Method reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
 * Acumulator - accumulates callback functions return values
 * CurrentValue - The current element being processed in the array.
 * Index - the index of the current element
 * InitialValue - a value to use as the first argument to the callback.
 * 
 * Executes a function provided on each element of the array, resulting in a single
 * value.
 */

const mascotas = [
    {nombre: 'Pelusa', edad: 12, tipo: 'gato'},
    {nombre: 'Peluchin', edad: 12, tipo: 'perro'},
    {nomre: 'Pulga', edad: 10, tipo: 'perro'},
    {nombre: 'Chanchito', edad: 3, tipo: 'perro'}
];

const indexed = mascotas.reduce((acumulator, element) => ({
    ...acumulator,
    [element.nombre]: element,
}), {});
console.log(indexed);

