let testStr = "FreeCodeCamp";
let testRegex = /Code/;

//La función .test() nos regresa un booleano en caso de que encuentre o no Code dentro del string
console.log(testRegex.test(testStr));

//Utilizando sentencias condicionales
let testStr = "FreeCodeCamp";
let newRgx = /Code|Camp/;
console.log(newRgx.test(testStr));

//Busqueda sin importar variacion de mayúsculas o minúsculas
let testStr = "FreeCodeCamp";
//La bandera i se utiliza para hacer busquedas sin importar variaciones de mayúsculas o minúsculas
let rg = /freecodecamp/i;
console.log(rg.test(testStr));

//Extrayendo coincidencias de expresiones regulares con ,match()
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));    // Expected output: ["expressions"]
console.log("Hello, World".match(/Hello/));     // Expected output: ["Hello"]

//La bandera g nos permite extraer más de una coincidencia. 
//El resultado de salida es un arreglo con todas las coincidencias encontradas.
let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex));


//Buscar lo que sea que incluya nuestro patrón.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;    //Busca todo lo que emopiece con hu
huRegex.test(humStr);   //Output: true
huRegex.test(hugStr);   //Output: true


//La clase de carácteres [ ] nos permite buscar palabras específicas que pueden tener variaciones en su sintaxys. 
//Como resultado extraé todas las vocales del enunciado y las guarda en un arreglo.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); 


//Utilizando el carácter  - podemos establecer un rango de elementos a considerar para poder realizar busquedas, junto con las clases de carácteres.
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); //True
batStr.match(bgRegex); //True
matStr.match(bgRegex); //False, la m está más allá de la e

//Se puede utilizar para buscar números y combinarlo para buscar letras y números
//El resultado de este código son las letras h a s y los números del 2 al 6
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex);
console.log(result);


//Con el carácter ^ podemos excluir set de caracteres
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); 