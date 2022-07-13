//Retomando recursividad

const numbers = [2,4,6,8,10,12,14,16,18,20];

function recursive(array){
  if(array.length != 0){
    console.log(array[0]);  // Imprimimos el primer valor de nuestro array
    array.shift();          // Eliminamos el primer numero del array
    recursive(array);       // Hacemos llamado de la funcion recursiva
  }
}

recursive(numbers);

//Utilizando recursividad para copiar objetos [Deep copy]
function isObject(subject){
  return typeof subject === 'object';
}

function isArray(subject){
  return Array.isArray(subject);
}

function deepCopy(subject){
  //Varviable a retornar donde se guardara la copia del objeto
  let copyObject;

  //Verificar si el subject es un objeto o es un array

  /**
   * Si el elemento que recibimos es un objeto, la copia que tenemos que guardar debe de ser un objeto
   * Si el elemento que recibimos es un array, la copia que tenemos que guardar debe de ser un array
   * Si no es ni un objeto ni un array retornamos el valor, ya que así no hay problemas de memoria
   */

  if(isArray(subject)){
    copyObject = [];
  }else if(isObject(subject)){
    copyObject = {};
  }else{
    return subject;
  }

  //En cado de que se trate de un objeto o de un array, hay que recorrer cada uno de sus elementos, creando una copia de cada uno
  for(key in subject){
    copyObject[key] = deepCopy(subject[key]);
  }

  return copyObject;
}