//Prototipos con la sintaxis de clases
class learningPath{
    constructor({
        name,
        courses = [],
        description,
        teachers,
        levels,
    }){
        this.name = name;
        this.courses = courses;
        this.description = description;
        this.teachers = teachers;
        this. levels = levels;
    }

    newCourse(newCourse) {
        this.courses.push(newCourse);
    }

    deleteCourse(courseToDelete) {
        let newCourses = this.courses.filter((course) => {
            if(course != courseToDelete){
                return course
            }
        });
        this.courses = newCourses;
    }

    updateCourse(courseName, newCourse){
        this.courses[this.courses.indexOf(courseName)] = newCourse;
    }
}
let webDevelopment = new learningPath({
    name: "Escuela de desarrollo web",
    courses: [
        "Fundamentos de programacion",
        "Preparacion de entorno",
        "Fundamentos de HTML y CSS",
        "Curso practico de HTML y CSS",
        "Curso de mobile first",
        "Curso de CSS grid",
        "Curso de desarrollo web con CSS grid y flexbox",
        "Curso de preprocesadores de CSS",
        "Curso basico de JavaScript",
        "Curso practico de JavaScript",
        "Curso de Programacion Orientada a objetos",
        "Curso de Programacion Orientada a Objetos con JavaScript",
        "Curso de Estructuras de datos con JavaScript",
        "Curso de React",
        "Curso de NodeJS",
        "Curso de webPack",
        "Curso de NestJs",
        "Curso de GatsbyJS"
    ],
    description: "Es una escuela muy buena para aprender programacion y desarrollo web",
    teachers: "Excelentes",
    levels: {
        level1 : "Basico",
        level2 : "Intermedio",
        level3 : "Avanzado"
    }

});

let dataScience = new learningPath({
    name: "Escuela de Data Science",
    courses: [
        "Fundamentos de programacion",
        "Preparacion de entorno",
        "Fundamentos de HTML y CSS",
        "Curso practico de HTML y CSS",
        "Curso de mobile first",
        "Curso de CSS grid",
        "Curso de desarrollo web con CSS grid y flexbox",
        "Curso de preprocesadores de CSS",
        "Curso basico de JavaScript",
        "Curso practico de JavaScript",
        "Curso de Programacion Orientada a objetos",
        "Curso de Programacion Orientada a Objetos con JavaScript",
        "Curso de Estructuras de datos con JavaScript",
        "Curso de React",
        "Curso de NodeJS",
        "Curso de webPack",
        "Curso de NestJs",
        "Curso de GatsbyJS"
    ],
    description: "Es una escuela muy buena para aprender programacion y desarrollo web",
    teachers: "Excelentes",
    levels: {
        level1 : "Basico",
        level2 : "Intermedio",
        level3 : "Avanzado"
    }

});

class Student1 {
    constructor({
        name, 
        lastName, 
        age, 
        finishedCourses,
        learningPath
    }){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.finishedCourses = finishedCourses;
        this.learningPath = learningPath;
    }
    finishCourse(finishCourse){
        this.finishedCourses.push(finishCourse);
    }
}

const miguelito = new Student1 ({
    name: 'Miguel', 
    lastName: "Gracia", 
    age: 21, 
    finishedCourses: ["Matematicas discretas", "Fundamentos de programacion", "Python intermedio"],
    learningPath: [webDevelopment,dataScience],
});