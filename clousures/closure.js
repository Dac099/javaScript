//Un closure recuerda el ambito(global,local) en que se a creado
function moneyBox(coins){
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);    //Imprime 5
moneyBox(10);   //Imprime 10
//Solo esta imprimiendo los valores que le pasamos, pero no los suma. Se soluciona con closure


/**
 * Lo que hace un closure es que va a recordar una asignacion como en este caso:
 *  - alcancia() es nuestro closure 
 *  - alcancia() junto con countCoins() van almacenar el valor de saveCoins, aunque se inicialice en 0 cada que se llama alcancia()
 */
function alcancia(){
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`$${saveCoins}`);
    }
    return countCoins;
}

let myMoney = alcancia();
myMoney(10); // Imprime 10
myMoney(15); // Imprime 25

//Crear variables privadas con closures
const person = () => {
    var saveName = "Name";
    return{
        getname: () => {
            return saveName;
        },
        setname: (name) => {
            saveName = name;
        }
    }
}

let newPerson = person();
newPerson.setname("David");
console.log(newPerson.getname());
console.log(newPerson.saveName);

/**
 * Con los closures podemos crear variables privadas a las que no se puede acceder desde fuera de la función, similar a 
 * getters y setter para las clases.
 * 
 * Esto funciona ya que cuando a newPerson se le asigna person() lo que realmente esta pasando es que se invoca la función
 * por lo que a newPerson se le asigna lo que retorna la función (en este caso es un objeto el que se retorna). Este objeto
 * tiene las propiedades de de getname y setname para poder manipular la variable saveName, sin embargo si intentamos acceder
 * a saveName directamente nos saldra como indefinido.
 */


//Tipos de scope

//global scope
//Declarada en el programa principal. Se puede acceder a ella desde todas las funciones declaradas
var variable = 'variable global';

//local scope
const saludo = 'Soy global';
const saludar = () => {
    const saludo = 'Soy local';
    console.log(saludo);
}
console.log(saludo);
saludar();

//Function scope
const variables = () => {
    let x = 1;
    const y = 2;
    var z = 3;
}
console.log(x);
console.log(y);
console.log(z);
