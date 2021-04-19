//Creamos una funcion que se le pasan dos parametros para sumarlos. Esta funcion es el callback
function sum(num1,num2){
    return num1 + num2;
}

//Una segunda funcion que recibe como parametros 2 numeros y una funcion
function calc(num1,num2,callback){
    //Retorna la funcion con dos parametros
    return callback(num1,num2);
}

//Escribimos el resultado de la funcion calc que se le pasa como parametro la funcion sum
console.log(calc(2,2,sum));


//A la funcion date le pasamos una funcion como parametro "callback"
function date(callback){
    console.log(new Date);  //Imprimimos la fecha
    console.log('Espera 3 segundos...');
    setTimeout(function(){  //Establecemos un setTimeOut que ejecuta una funcion en 3 segundos
        let date = new Date();  //Iniciamos una nueva fecha
        callback(date);     //A nuestro callback le pasamos la fecha que creamos
    }, 3000)
}

//Nuestro callback es esta funcion que imprime el parametro que se le pasa
function  printDate(dateNow){
    console.log(dateNow);
}

date(printDate);

