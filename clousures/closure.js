//Un closure recuerda el ambito(global,local) en que se a creado
function moneyBox(coins){
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);    //Imprime 5
moneyBox(10);   //Imprime 10
//Solo esta imprimiendo los valores que le pasamos, pero no los suma. Se soluciona con closure


/**
 * Lo que hace un closure es que va a recordar una asignacion como en este caso:
 *  - alcancia() es nuestro closure 
 *  - alcancia() junto con countCoins() van almacenar el valor de saveCoins, aunque se inicialice en 0 cada que se llama alcancia()
 */
function alcancia(){
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`$${saveCoins}`);
    }
    return countCoins;
}

let myMoney = alcancia();
myMoney(10); // Imprime 10
myMoney(15); // Imprime 25

//Ambito lexico
const f = () => {
    if(true){
        var fr = 1;
        let ft = 2;
        const fg = 3;
    }
    console.log(fr);
    // console.log(ft);
    // console.log(fg);
}
f();