class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiantes",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    public(){
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`Likes: ${this.likes}`);
        console.log(`${this.content}`);
    }
}

function videoPlay(id){
    const urlSecreta = "http://platziSecreto.com/" + id;
    console.log("Se esta reproduciendo el video");
}

function videoPause(id){
    const urlSecreta = "http://platziSecreto.com/" + id;
    console.log("El video se ha pausado"); 
}


export class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    play(){
        videoPlay(this.videoID);
    }
    
    pause(){
        videoPause(this.videoID);
    }
}

class Clase{
    constructor({
        name,
        description,
        marcadores = {},
        recursos = {},
        aportes = [],
        preguntas = [],
        duracion,
    }){
        this.name = name;
        this.description = description;
        this.marcadores = marcadores;
        this.recursos = recursos;
        this.aportes = aportes;
        this.preguntas = preguntas;
        this.duracion = duracion;
    }
}
//Prototipo para crear una curso
class Course{
    constructor({
        name,
        clases = [],
        duracion,
        nivel,
        isFree = false,
        lang = "Spanish",
    }){
        //Metodo privado por convencion
        this._name = name;
        this.clases = clases;
        this.aportes = aportes;
        this.duracion = duracion;
        this.nivel = nivel;
        this.isFree = isFree;
        this.lang = lang;
    }
    
    get name(){
        return this._name;
    }
    
    set name(newName){
        this._name = newName;
    }
}


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


class Student{
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
    publicComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.public();
    }
}


class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.finishedCourses.push(newCourse);
    }

    publicComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Teacher",
        });
        comment.public();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.lang){
            this.finishedCourses.push(newCourse);
        }else{
            console.warn(`Lo siento ${this.name} no puedes tomar este curso`);
        }
    }
}


class BasicStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.finishedCourses.push(newCourse);
        }else{
            console.warn(`Lo siento ${this.name} no puedes tomar cursos en ingles`);
        }
    }
}


class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        this.finishedCourses.push(newCourse);
    }
}



//Instancias de cursos
const programacionBasica = new Course({
    name : "Curso gratis de programacion basica",
    clases : [],
    isFree: true,
});

const cursoDefinitivoHtmlCss = new Course({
    name: "Curso definitivo de HTML y CSS",
    clases: [],
});

const cursoPracticoHtmlCss = new Course({
    name: "Curso Practico de HTML y CSS",
    clases: [],
    lang: "English",
});

const pythonBasico = new Course({
    name: "Curso Basico de Python",
    clases: [],
});

const pythonIntermedio = new Course({
    name: "Curso intermedio de Python",
    clases: [],
});

const javaScriptBasico = new Course({
    name: "Curso Basico De JavaScript",
    clases: [],
});

const matematicasDiscretas = new Course({
    name: "Curso de Matematicas Discretas",
    clases: [],
});


//Prototipos con la sintaxis de clases
let webDevelopment = new learningPath({
    name: "Escuela de desarrollo web",
    courses: [
        programacionBasica,
        cursoDefinitivoHtmlCss,
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
        programacionBasica,
        cursoDefinitivoHtmlCss,
    ],
    description: "Es una escuela excelente para aprender ciencia de datos",
    teachers: "Excelentes",
    levels: {
        level1 : "Basico",
        level2 : "Intermedio",
        level3 : "Avanzado"
    }

});


const miguelito = new FreeStudent ({
    name: 'Miguel', 
    lastName: "Gracia", 
    age: 21, 
    finishedCourses: ["Matematicas discretas", "Fundamentos de programacion", "Python intermedio"],
    learningPath: [webDevelopment,dataScience],
});