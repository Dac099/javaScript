function diasEntreFechas(fecha1,fecha2) {
    const unDia = 1000 * 3600 * 24; //milisegundos en un dia
    const diferencia = Math.abs(fecha1 - fecha2); //Valor absoluto de la resta entre dos fechas. Nos regresa un resultado en milisegundos
    return Math.floor(diferencia / unDia);
}

const hoy = new Date();
const nacimiento = new Date(1999,3,16) //En esta funcion enero tiene valor 0 y va incrementado en 1 para cada mes

console.log(`${diasEntreFechas(hoy,nacimiento)} dias`);