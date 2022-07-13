//Shallow copy
const ob1 = {
  a:"a",
  b:"b",
  c:"c"
};

const ob2 = {};

//Copiando objetos utilizando for in
//Funciona, pero no copia objetos anidados

for(prop in ob1){
  ob2[prop] = ob1[prop];
}

ob2.a = "A";


//Copiando objetos usando el superprototipo Object
//Funciona, pero no copia objetos anidados

const ob3 = Object.create(ob1);

ob3.a = "A";
ob3.b = "B";
ob3.c = "C";


//Copiando objetos con los métodos de JSON
//Copia objetos anidados, pero no copia metodos
const objStringify = JSON.stringify(ob1);
const copyObject = JSON.parse(objStringify);

