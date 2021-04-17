//Funciones como parametros
class Persona {
    constructor(nombre,apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn){
        /**
         * A la funcion saludar() se le pasa como parametro fn que representa una funcion
         * fn representa la funcion responderSaludo()
         * Si a saludar() no le pasan ningun parametro se va a ejecutar con normalida
         * Si a saludar() le pasan el parametro fn se va a ejecutar el if
         */
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if (fn){
            /**
             * Para invocar la funcion que se paso como parametro solo se llama con sus parametros 
             */
            fn(this.nombre,this.apellido,false);
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
        if (fn){
            fn(this.nombre, this.apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Hola, desarrollador`);
    }
}

let david = new Desarrollador("David", "Ceja", 1.73);
let juan = new Persona("Juan", "Del campo", 1.80);

david.saludar(responderSaludo);
juan.saludar();

//Como funciona el asincronismo - $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
