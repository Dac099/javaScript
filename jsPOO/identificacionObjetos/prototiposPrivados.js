function requiredParam(param){
  throw Error(`The ${param} in required`);
}

function LearningPath({
  name = requiredParam('name'),
  courses = []
} = {}){
  this.name = name;
  this.courses = courses;
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
  
  const private = {
    _learningPaths: []
  };

  Object.defineProperty(this, "learningPaths", {
    get(){
      return private['_learningPaths'];
    },

    set(newLP){
      if(newLP instanceof LearningPath){
        private['_learningPaths'] = newLP;
      }else{
        console.warn("Some learning path are not instance of learning path");
      }
    }
  });

  for (let learningPath of learningPaths){
    this.learningPaths.push(learningPath);
  }
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
