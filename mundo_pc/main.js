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

    constructor(tipoEntrada, marca, idRaton){
        super(tipoEntrada, marca);
        this._idRaton = idRaton;

        Raton.contadorRatones++;
    }

    get idRaton(){
        return this._idRaton;
    }

    set idRaton(nuevoIdRaton){
        this._idRaton = nuevoIdRaton;
    }

    toString(){
        console.log(`Raon: [Tipo de entrada: ${this.tipoEntrada} Marca: ${this.marca} id: ${this.idRaton}]`);
    }

}


class Teclado extends DispositivoEntrada{
    
    static contadorTeclados = 0

    constructor(tipoEntrada, marca, idTeclado){
        super(tipoEntrada, marca);
        this._idTeclado = idTeclado;

        Teclado.contadorTeclados++;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    set idTeclado(nuevoIdTeclado){
        this._idTeclado = nuevoIdTeclado;
    }

    toString(){
        console.log(`Teclado: [Tipo de entrada: ${this.tipoEntrada} Marca: ${this.marca} id: ${this.idTeclado}]`);
    }
}


class Monitor{

    static contadorMonitores = 0;

    constructor(idMonitor, marca, pulgadas){
        this._idMonitor = idMonitor;
        this._marca = marca;
        this._pulgadas = pulgadas;

        Monitor.contadorMonitores++;
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
        this._marca = nuevoMarca
    }

    get pulgadas(){
        return this._pulgadas;
    }

    set pulgadas(nuevasPulgadas){
        this._pulgadas = nuevasPulgadas;
    }

    toString(){
        console.log(`Monitor: [id: ${this.idMonitor} Marca: ${this.marca} Pulgadas: ${this.pulgadas}]`);
    }
}

class Computadora {
    
    static contadorComputadoras = 0
    
    constructor(idComputadora, modelo, monitor, teclado, raton){
        this._idComputadora = idComputadora;
        this._modelo = modelo;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;

        Computadora.contadorComputadoras++;
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
        let monitor = this._monitor.toString();
        return monitor;
    }

    set monitor(nuevoMonitor){
        this._monitor = nuevoMonitor;
    }

    get teclado(){
        let teclado = this._teclado.toString();
        return teclado;
    }

    set teclado(nuevoTeclado){
        this._teclado = nuevoTeclado;
    }

    get raton(){
        let raton = this._raton.toString();
        return raton;
    }

    set raton(nuevoRaton){
        this._raton = nuevoRaton;
    }

    toString(){
        return `${this.monitor}`;
    }
}

let mouse = new Raton('Control','Logitech','G203');
let keyboard = new Teclado('Tipeo', 'Ajazz', 'AK33');
let monitor = new Monitor('GW2480','BenQ', 24);
let pcerda = new Computadora('Armada','La diosa', monitor, keyboard, mouse);

console.log(pcerda.toString());