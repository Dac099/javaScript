class Car{
    constructor(license,driver){
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }
    printDataCar(){
        if (this.passenger != undefined){
            console.log(this.driver);
            console.log(`Driver: ${this.driver.name} | Document: ${this.driver.document} | Passengers: ${this.passenger}`)
        }
    }

    get numberPassengers(passenger){
        console.log(this.passenger);
    }
    set numberPasssengers(number){
        if(this.passenger + number < 4){
            this.passenger += number;
        }else{
            console.log("No se admiten mas de 4 pasajeros");
        }
    }
}
