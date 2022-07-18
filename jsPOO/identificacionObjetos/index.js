function requiredParam(param){
  throw Error(`The ${param} in required`);
}

function LearningPath({
  name = requiredParam('name'),
  courses = []
} = {}){
  this.name = name;
  this.courses = courses;
/*   const private = {
    '_name': name,
    '_courses': courses
  };

  const public = {
    get name(){
      return private['_name'];
    },

    set name(newName){
      private['_name'] = newName;
    },
    
    get courses(){
      return private['_courses'];
    }
  };

  return public; */
}

function Student({
  name = requiredParam('name'),
  age,
  socialMedia = [],
  learningPaths = []
} = {}){
  this.name = name;
  this.age = age;
  this.socialMedia = socialMedia;
  

  //Validar que el learning Path que recibimos sea un array con instancias de learning path

  if(Array.isArray(learningPaths)){
    this.learningPaths = [];
  }

  for (let learningPath of learningPaths){
    if(learningPath instanceof LearningPath){
      this.learningPaths.push(learningPath);
    }
  }

/*   const private = {
    '_name': name,
    '_learninPath': learningPath
  };

  const public = {
    age, 
    path,
    socialMedia,

    get name(){
      return private['_name'];
    },

    set name(newName){
      private['_name'] = newName;
    },

    get learningPath(){
      return private['_learninPath'];
    },

    set learningPath(newLearningPath){
      //Duck typing - verificamos que el learning path cumple con los atributos de un learning path
      if(!newLearningPath.name){
        console.warn("The learning path doesn't have a name");
        return;
      }

      if(!newLearningPath.courses){
        console.warn("The learning path doesn't have a courses list");
        return;
      }

      if(!Array.isArray(newLearningPath.courses)){
        console.warn("The courses property of learning path isn't an array");
        return;
      }

      private['_learninPath'].push(newLearningPath);
    }
  };

  return public; */
}

const web = new LearningPath({name: "Web Development", courses: ["JS", "HTML", "CSS"]});
const science = new LearningPath({name:"Data Science", courses: ["Python", "Pandas", "NumPy"]});


const david = new Student({
  name: 'David',
  path: 'Web Developer',
  age: 23,
  socialMedia: ['twitter'],
  learningPaths: [
    web,
    science,
    { // Como este objeto no es una instancia de LearninPath no lo agrega a la lista de learning paths
      name: "SUS",
      courses: ["How become in a SUS"]
    }
  ]
});

console.log(david);
