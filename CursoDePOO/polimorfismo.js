class Persona { 
    //Esta es una propiedad exclusiva de la clase
    //Un uso de esto es para contar la creacion de objetos de una clase
    static contadorObjetosPersona = 0;

    //Podemos crear propiedades constantes estaticas
    static get MAX_OBJ(){
        return 5;
    }

    constructor(name,lastName, age){
        this._name = name,
        this._lastName = lastName,
        this._age = age;
        if(contadorObjetosPersona < MAX_OBJ){
            Persona.contadorObjetosPersona ++
        }else{
            console.log("Se ha superado el numero de obtenos creados");
        }
    }

    get name(){
        return this._name;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    set name(Newname){
        this._name = Newname;
    }
    set lastName(NewLastName){
        this._lastName = NewLastName;
    }
    set age(NewAge){
        this._age = NewAge;
    }
    nombreCompleto(){
        return `${this.name} ${this.lastName}`;
    }
    //El metodo estatico se asocia con uns clase por ello no se puede utilizar con los 
    //Objetos que instanciados
    //Estos metodos solo se pueden llamar desde la clase.
    static saludar(){
        console.log("Static, saludos");
    }
    //Se les puede pasar un objeto como parametro
    static despedida(persona){
        console.log(persona.name);
    }
}
class Empleado extends Persona{
    constructor(name,lastName,age,departamento){
        super(name,lastName,age);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(newDepartamento){
        this._departamento = newDepartamento;
    }
    /**
     * La sobreescritura es la clave del polimorfismo 
     * 
     * Con la herencia ya podemos utilizar el metodo nombreCompleto de la clase padre
     * Pero es un metodo incompleto para la clase padre, por lo que hay que sobrescribirla
     * Para aplicar la sobrescritura hay que reescribir el metodo con el mismo nombre y 
     * parametros.
     * 
     * Se utiliza la palabra reservada super para acceder al metodo de la clase padre y 
     * poder reutiliza codigo.
     */
    nombreCompleto(){
        return  `${super.nombreCompleto()} y trabajo en ${this._departamento}`
    }
}

let david = new Persona("David","Ceja", 21);
let juan = new Empleado("Juan","Campos",33,"Gerencia");

// console.log(david.name);
// console.log(david.nombreCompleto());
// console.log(juan.name);
// console.log(juan.nombreCompleto());
// console.log(juan.departamento)
// juan.departamento = "Recursos Humanos";
// console.log(juan.departamento);
Persona.saludar();
Persona.despedida(david);
console.log(Persona.contadorObjetosPersona); //Imprime dos: uno de david y otro de juan
console.log(Persona.MAX_OBJ);