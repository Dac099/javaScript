class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }

    toString(){
        return `Id : ${this._idProducto}\nProducto: ${this._nombre}\nPrecio : $${this._precio}\n`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){return 5;}
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._productos[this._contadorProductosAgregados] = producto;
        }else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularVenta(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto.precio
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden}\nTotal: ${this.calcularVenta()}\nProductos: ${this.productosOrden}`);
    }
}

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa",300);
let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();