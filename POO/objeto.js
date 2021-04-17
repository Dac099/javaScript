// **Declaracion de un objeto literal
var usuario = {
    nombre : "Juan",
    correo : "juan@gmail.com",
    sistema : "windows",
    actividad : true,
    info : function() {
        console.log(`Sistema: ${this.sistema} | Actividad : ${this.actividad}`);
    }
}

//**Declaracion de una objeto constructor
function arma(mirilla,cargador,tipo){
    this.mirilla = mirilla;
    this.cargador = cargador;
    this.tipo = tipo;
}
var m4 = new arma("Holografica",31,"automatica");
console.log(m4);

// **Objetos como parametros
function mayusculas(u)
{
    var nombre = u.nombre.toUpperCase();
    console.log(nombre);
}
mayusculas(usuario);

//**Atributos de un objeto como parametro
function caracter({sistema})
{
    console.log(sistema.charAt(1));
}
caracter(usuario);

// **Se puede eliminar una propiedad de un objeto con la instruccion
delete usuario.actividad;
console.log(usuario.actividad);

// **Accediendo a un atributo por una clave
var key = "nombre";
console.log(usuario[key]);

// **Operador in para poder ver las keys en un objeto
console.log("correo" in usuario);
console.log("mirilla" in m4)

//**Los objetos en JS se copian por referencia al contrario de los primitivos que se copian sus valores*/
// **Aqui se copia la referencia de la direccion del objeto
var usuario1 = {
    name : "David",
}
var user = usuario1;

// **Aqui se copia el valor
var str = "Hola";
var str1 = str;

// **Ver las propiedades de los objetos con for
for (key in usuario)
{
    console.log(usuario.key);
}

// **Pasar objetos como referencia en JS
function changeSystem(user)
{
    // **De esta forma hacemos una copia del objeto que pasemos a la funcion y asi podemos modificar sus atributos o agregarle nuevos.
    return{
        ...user,
        sistema : "Linux",
    }
}
var newUserSystem = changeSystem(usuario);
console.log(newUserSystem)
console.log(usuario)