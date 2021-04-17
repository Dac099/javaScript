let estudiantes = ["David", "Juan", "Leonardo"];
function Saludar(estudiante){
    console.log(`Hola ${estudiante}`);
}
while (estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    // Saludar(estudiante);
    console.log(estudiante);
}


var user = {
    name: "David",
    lastName: "Ceja",
    age: 21,
    weight: 93,
}
console.log(`Al inicio del anio ${user.name} pesaba ${user.weight} kg`);

const PESO_VARIABLE = 0.200;
const aumentarDePeso = (persona) => persona.weight += PESO_VARIABLE;
const perderPeso = (persona) => persona.weight -= PESO_VARIABLE;

for (let i = 0; i <= 364; i++){
    let random = Math.random();
    if (random < 0.25){
        // Aumenta de peso
        aumentarDePeso(user);
    }else if (random , 0.50){
        // Baja de peso
        perderPeso(user);
    }   
}
console.log(`Al final de anio ${user.name} pesa ${user.weight.toFixed(4)} kg`);
