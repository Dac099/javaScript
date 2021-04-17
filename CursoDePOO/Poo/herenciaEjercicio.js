class Persona {
    static contadorPersonas = 0;
    constructor (nombre, apellido, edad){
        ++Persona.contadorPersonas, 
        this._idPersona = Persona.contadorPersonas,
        this._nombre = nombre,
        this._apellido = apellido,
        this._edad = edad
    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(nuevoApellido){
        this._apellido = nuevoApellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(nuevaEdad){
        this._edad = nuevaEdad;
    }
    toString(){
        return `${this.idPersona} ${this.nombre} ${this.apellido} ${this.edad}`;
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idPersona;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(nuevoSueldo){
        this._sueldo = nuevoSueldo;
    }
    toString(){
        return `${super.toString()} ${this.sueldo}`;
    }
}

class Cliente extends Persona{
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._fechaDeRegistro = new Date();
    }
    get idCliente(){
        return this.idPersona;
    }
    get fechaDeRegistro(){
        return this._fechaDeRegistro;
    }
    set fechaDeRegistro(nuevaFecha){
        this._fechaDeRegistro = nuevaFecha;
    }
    toString(){
        return `${super.toString()} ${this.fechaDeRegistro}`;
    }
}

let empleadoDavid = new Empleado("David","Ceja",21,10000);
let clienteJuan = new Cliente("Juan","Campos",32);

console.log(empleadoDavid.toString());
console.log(clienteJuan.toString());

empleadoDavid.sueldo = 15000;
empleadoDavid.apellido = "Zapata";
console.log(empleadoDavid.idEmpleado);
clienteJuan.fechaDeRegistro = new Date() + 1;

console.log(empleadoDavid.toString());
console.log(clienteJuan.toString());