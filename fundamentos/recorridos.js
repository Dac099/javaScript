var articulos = [
    {nombre: "bici", costo: 2500},
    {nombre: "television", costo: 1500},
    {nombre: "laptop", costo: 20000},
    {nombre: "control", costo: 1500},
    {nombre: "teclado", costo: 800},
    {nombre: "monitor", costo : 3000}
];

// Recorriendo el array
var articulosCaros = articulos.filter(function(articulo){
    return articulo.costo >= 3000;
});
var articulosBaratos = articulos.filter(function(articulo){
    return articulo.costo < 3000;
});
console.log(articulosCaros);
console.log(articulosBaratos);

// Metodo de mapeo
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreArticulos);

// Metdodo find
var articuloBuscado = articulos.find(function(articulo){
    return articulo.nombre == "teclado";
});
console.log(articuloBuscado);

// Metodo for each
articulos.forEach(function(articulo){
    console.log(articulo.costo);
})

// Metodo some
var validacion = articulos.some(function(articulo){
    return articulo.costo > 10000;
});
console.log(validacion);

switch (true){
    case false:
        console.log("hola");
        break;
    case true:
        console.log("holo");
        break;
}