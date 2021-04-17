// En js no hay clases, hay prototipos. Pero con la llegada de EcmaScript 6 llegaron las clases
class Persona {
    // El metodo constructor se va a ejecutar cuando instaciemos objetos
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
}
// La palabra reservada [extends] sirve para indicar la herencia de una clase a otra
// En este caso la clase Desarrolldor hereda de Persona
class Desarrollador extends Persona { 
    constructor(nombre, apellido, altura){
        // Js no deja acceder por this, ya que primero necesitamos acceder al constructor super() de la clase padre
        super(nombre, apellido, altura)
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

var david = new Persona("David","Ceja",176);
david.saludar();

var juan = new Desarrollador("Juan","Calles", 177);
juan.saludar()