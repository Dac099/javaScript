//Ahorrando computo

/**
 * Basandonos en el caso del factorial:
 * 6! = 6*5*4*3*2*1
 * 12! = 12*11*10*9*8*7*6!
 * Podemos ahorrar poder de computo en guardar la variable de 6! para utilizarla en 12!
 * y no tener que volver hacer todo ese calculo.
 * 
 * Esto se pude lograr utilizando la cache
 * 
 * Para que funcione el calculo alamcenando valores en la cache se tiene que haber realizado
 * un calculo de mayor o igual valor al actual para que se tenga registrado una parte
 * del mismo calculo
 */
function factorial(n){
    //Verificamos si ya existe la cache, si no existe la creamos como un objeto
    if(!this.cache){
        this.cache = {};
    }
    //Verificamos si ya resolvimos el calculo, si es asi regresamos el resultado
    if(this.cache[n]){
        return this.cache[n];
    }

    if(n === 1){
        return 1;
    }else{
        //al objeto cache en su propiedad n le almacenamos el calculo recursivo
        this.cache[n] = n * factorial(n-1);
        return this.cache[n];
    }
}
