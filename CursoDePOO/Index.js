// Creamos nuestros objetos 
var car = new Car("mgn2021", new Account("Andres Herrera","CEZD990416HMCJPV07"));
// El objeto UberX hereda datos de la clase car
var uberX = new UberX("alor41", new Account("Javier Hernandez", "FBCXAIPART06HDA7HA"),"Chevrolet","Sonic");

// car.printDataCar();
uberX.setPassengers(4);
uberX.printDataCar();