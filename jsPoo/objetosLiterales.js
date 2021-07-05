//Declaracion de un objeto literal
const natalia = {
  name: "Natalia",
  lastName: "Ceja",
  age: 23,
  cursosAprobados : [
      "Curso definitivo de HTML y CSS",
      "Curso practico de HTML y CSS"
  ],
  aprobarCurso(cursoAprobado){
    //Hacer que natalia apruebe otro curso
    this.cursosAprobados.push(cursoAprobado);
  }
};

//Crear prototipo
function Student(name, lastName, age, finishedCourses) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.coursesFinished = finishedCourses;

    // this.aprobarCurso = function(finishedCourse) {
    //     this.coursesFinished.push(finishedCourse);
    // };
}

Student.prototype.aprobarCurso = function(finishedCourse) {
    this.coursesFinished.push(finishedCourse);
};

const juanita = new Student(
    "Juanita", 
    "Lopez", 
    34,
    ["Finazas personales", "Programacion basica", "Fundamentos de HTML y CSS"]    
);