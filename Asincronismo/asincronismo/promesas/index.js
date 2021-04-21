/**
 * Las promesas como lo indica su nombre es la promesa de que algo puede ocurrir o no.
 * Vamos a utiliza promesas cuando se manejen funciones asincronas.
 */

//Codigo sin promesas y manejando funciones asincronas:
let x = 10;
console.log("Iniciando proceso");
//Como SetTimeOut es una funcion asincronica se va a ejecutar una vez que la pila este vacia.
setTimeout(() => {
    x = x * 10;
    console.log("Proceso terminado");
},1000);
console.log(`El resultado es ${x}`);

// Codigo con promesas
let y = 10;

const p = new Promise((resolve,reject) =>{
    setTimeout(() => {
        y = y * 10;
        console.log("Proceso terminado");
        resolve(y);
    }, 1000);
});

console.log("Proceso iniciado");
p
    .then(respuesta => {
        console.log(`La respuesta es ${respuesta}`);
    })
    .catch(error => {
        console.log("Ocurrio un error");
    });


//Tambien se pueden usar promesas encadenadas de forma que una promesa retorne otra promesa
let usuarios = [
    {
        id: 1,
        nombre: "David"
    },
    {
        id: 2,
        nombre: "Aby"
    }
]
let telefonos = [
    {
        id : 1,
        telefono: 5897487414
    },
    {
        id: 2,
        telefono: 09319429844
    }
]

const buscarUsuario = id => {
    return new Promise((resolve,reject) => {
        if(usuarios.find(usuario => usuario.id === id)){
            console.log("El usuario existe")
            resolve(buscarTelefono(id));
        }else{
            reject("El usuario no existe");
        }
    });
};

const buscarTelefono = id => {
    return new Promise((resolve,reject) => {
        if(telefonos.find(telefono => telefono.id === id)){
            resolve("El telefono existe");
        }else{
            reject("El telefono no existe");
        }
    });
};

buscarUsuario(2)
    .then(res => res)   //Como nuestra primer promesa retorna otra promesa retornamos el resultado
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));