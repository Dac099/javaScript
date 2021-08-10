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
        console.log(`Tipo de entrada: ${this.tipoEntrada}\nMarca: ${this.marca}\nid: ${this.idRaton}`);
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
        console.log(`Tipo de entrada: ${this.tipoEntrada}\nMarca: ${this.marca}\nid: ${this.idTeclado}`);
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
        console.log(`id: ${this.idMonitor}\nMarca: ${this.marca}\nPulgadas: ${this.pulgadas}`);
    }
}