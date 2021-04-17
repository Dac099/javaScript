// Variables de JavaScript 
// JS es un lenguaje debilmente tipado ya que no hay nada que indique si una variable es de un tipo
"use strict";


//**Variable de tipo string
var nombre = "David"; 
var apellido = "Ceja Zapata";
console.log(`Hola! ${nombre} ${apellido}`);


// Con este metodo podemos transformar una cadena a mayusculas
var nombreMayusculas = nombre.toUpperCase();
console.log(nombreMayusculas);

// Con este metodo se nos devuelve el primer caractere de una cadena
var primerCaracter = nombre.charAt(1);
console.log(primerCaracter);

// Con este atributo podemos conocer la longitud de una cadena
var longitudNombre = nombre.length;
console.log(longitudNombre);

// **variables de tipo Numero
var peso = 92;
var comida = 5;
console.log(`Un postresito y ya peso ${peso + comida}`);
var precio = 33.90;
var descuento = 0.05;
var precioFinal = precio - (precio * descuento);

var str = `El precio es: ${precio}, el descuento es: ${descuento * 100}% el costo final es: ${precioFinal}`;
console.log(str);

//redondear valores 
var precioPrueba = (90.5 / 0.03);
console.log(precioPrueba);
precioPrueba = Math.round(precioPrueba);
console.log(precioPrueba);
precioPrueba = precioPrueba.toFixed(4);
console.log(precioPrueba);


//Parsear valores
var altura = "200.423";
var pasteles = "2";
console.log(parseFloat(altura));
console.log(parseInt(pasteles));


 