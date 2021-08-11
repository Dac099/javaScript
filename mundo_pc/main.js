class DispositivoEntrada {
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }


    //Getters y Setters
    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(nuevoTipoEntrada){
        this._tipoEntrada = nuevoTipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(nuevaMarca){
        this._marca = nuevaMarca;
    }
}


class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        Raton.contadorRatones++;

        super(tipoEntrada, marca);
        this._idRaton = Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    set idRaton(nuevoIdRaton){
        this._idRaton = nuevoIdRaton;
    }

    toString(){
        return `Raton:\n\t\tTipo de entrada: ${this.tipoEntrada}\n\t\tMarca: ${this.marca}\n\t\tid: ${this.idRaton}`;
    }

}


class Teclado extends DispositivoEntrada{
    
    static contadorTeclados = 0

    constructor(tipoEntrada, marca){
        Teclado.contadorTeclados++;

        super(tipoEntrada, marca);
        this._idTeclado = Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    set idTeclado(nuevoIdTeclado){
        this._idTeclado = nuevoIdTeclado;
    }

    toString(){
        return `Teclado:\n\t\tTipo de entrada: ${this.tipoEntrada}\n\t\tMarca: ${this.marca}\n\t\tid: ${this.idTeclado}`;
    }
}


class Monitor{

    static contadorMonitores = 0;

    constructor(marca, pulgadas){
        Monitor.contadorMonitores++;

        this._idMonitor = Monitor.contadorMonitores;
        this._marca = marca;
        this._pulgadas = pulgadas;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    set idMonitor(nuevoIdMonitor){
        this._idMonitor = nuevoIdMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(nuevaMarca){
        this._marca = nuevaMarca
    }

    get pulgadas(){
        return this._pulgadas;
    }

    set pulgadas(nuevasPulgadas){
        this._pulgadas = nuevasPulgadas;
    }

    toString(){
        return `Monitor:\n\t\tid: ${this.idMonitor}\n\t\tMarca: ${this.marca}\n\t\tPulgadas: ${this.pulgadas}`;
    }
}

class Computadora {
    
    static contadorComputadoras = 0
    
    constructor(modelo, monitor, teclado, raton){
        Computadora.contadorComputadoras++;

        this._idComputadora = Computadora.contadorComputadoras;
        this._modelo = modelo;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    set idComputadora(nuevoIdComputadora){
        this._idComputadora = nuevoIdComputadora
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(nuevoModelo){
        this._modelo = nuevoModelo;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(nuevoMonitor){
        this._monitor = nuevoMonitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(nuevoTeclado){
        this._teclado = nuevoTeclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(nuevoRaton){
        this._raton = nuevoRaton;
    }

    toString(){
        return `Computadora ${this._idComputadora}:\t${this.modelo}\n\t${this.monitor}\n\t${this.raton}\n\t${this.teclado}\n`;
    }
}

class Orden {
    
    static contadorOrdenes = 0;
    
    constructor(){
        Orden.contadorOrdenes++;
        this._idOrden = Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    set idOrden(nuevaOrden){
        this._idOrden = nuevaOrden;
    }

    get computadoras(){
        return this._computadoras;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        console.log(`Orden: ${this.idOrden}`);
        `${this.computadoras.forEach(computadora => console.log(computadora.toString()))}`;
    }
}

let mouse = new Raton('Control','Logitech');
let keyboard = new Teclado('Tipeo', 'Ajazz', 'AK33');
let monitor = new Monitor('BenQ', 24);
let pcerda = new Computadora('Armada', monitor, keyboard, mouse);


let trackpad =  new Raton('Control','HP');
let teclado =  new Teclado('Tipeo','HP');
let pantalla =  new Monitor('Samsung',19);
let laptop =  new Computadora('14cb23',pantalla,teclado,trackpad);


let orden1 =  new Orden();
orden1.agregarComputadora(pcerda);
orden1.agregarComputadora(laptop);

orden1.mostrarOrden();