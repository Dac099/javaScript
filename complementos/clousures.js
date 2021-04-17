//Un clousure recuerda el estado de las cosas cuando fue invocada   
function crearSaludo(finalDeFrase){
    return function (nombre){
        console.log(`Hola ${nombre} ${finalDeFrase}`);
    }
}

const saludoArgentino = crearSaludo("che");

saludoArgentino("David"); 