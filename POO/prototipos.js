function heredaDe(prototipoHijo, prototipoPadre){
    // Se crea una funcion sin comportamientos, es solo auxiliar
    var fn = function(){}
    // Al prototipo de la funcion le asignamos el prototipo del padre
    fn.prototype = prototipoPadre.prototype;
    // Al prototipo del hijo le asignamos el prototipo de fn, el cual adquirio el prototipo del padre
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;

}
function Persona(nombre,apellido,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    
    Persona.prototype.saluda = function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`);
    }
    Persona.prototype.soyAlto = function(){
        return this.altura > 170;
    }
}

function Desarrollador(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    Desarrollador.prototype.saluda = function(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

// heredaDe(Desarrollador, Persona);

var david = new Persona("David", "Ceja",180);
var erika = new Persona("Erika", "luna",190);
var arturo = new Persona("Arturo", "Sanchez",160);
var gala = new Desarrollador("Gala", "ceja", 150);

gala.saluda();
console.log(gala.soyAlto());
david.saluda();
console.log(david.soyAlto())
erika.saluda();
arturo.saluda();