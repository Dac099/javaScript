//Prototipos con la sintaxis de clases
class Student1 {
    constructor({name, lastName, age, finishedCourses}){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.finishedCourses = finishedCourses;
    }
    finishCourse(finishCourse){
        this.finishedCourses.push(finishCourse);
    }
}

const miguelito = new Student1 ({
    name: 'Miguel', 
    lastName: "Gracia", 
    age: 21, 
    finishedCourses: ["Matematicas discretas", "Fundamentos de programacion", "Python intermedio"]}
);