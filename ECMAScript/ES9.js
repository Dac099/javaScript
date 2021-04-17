const obj ={
    name: "David",
    age: 21,
}

let {name,...all} = obj;
console.log(name);
console.log(all.age);

//Con la propagacion podemos combinar objetos como si concatenaramos cadenas
const obj1 = {
    ...obj,
    coutry: "MX",
}
console.log(obj1);

const helloWorld = () => {
    return new Promise ((resolve,reject) => {
        (true) 
        ? resolve("Hello world")
        : reject(new Error("Test error"));
    });
}

helloWorld
    .then(response => console.log(response))
    .catch(err => console.log("err -> ", err)) 
    .finally(() => console.log("Finaliozo"));

const regexData = /([0-9][{4}]) - ([0 - 9][{2}]) - ([0 - 9][{2}])/
const match = regexData.exec("2018-04-28");
const year = match[1];
const month = match[2];
const day = match[3];
console.log("date ->", year, month, day);