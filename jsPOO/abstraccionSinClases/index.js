function isObject(subject){
  return typeof subject === 'object';
}

function isArray(subject){
  return Array.isArray(subject);
}

function deepCopy(subject){
  let copyObject;

  if(isArray(subject)){
    copyObject = [];
  }else if(isObject(subject)){
    copyObject = {};
  }else{
    return subject;
  }

  for(key in subject){
    copyObject[key] = deepCopy(subject[key]);
  }

  return copyObject;
}

//En vez de crear una clase se puede utilizar un objeto literal como base para crear objetos
const studentBase = {
  name: undefined,
  age: undefined,
  path: undefined,
  courses: undefined,
  socialMedia: undefined
}


//Creando una fabrica de objetos siguiendo el patrón RORO
function requiredParam(param){
  throw Error(`The ${param} in required`);
}

function factoryObject({
  name = requiredParam('name'),
  age,
  path,
  courses = [],
  socialMedia = []
} = {}){

  const private = {
    _name: name
  };

  const public = {
    age, 
    path,
    courses,
    socialMedia,
    /* changeName(newName){
      private['_name'] = newName;
    },
    getName(){
      return private['_name'];
    } */
    get name(){
      return private['_name'];
    },
    set name(newName){
      private['_name'] = newName;
    }
  };

/*   Object.defineProperties(public, {
    readName: {
      writable: false,
      configurable: false
    },
    changeName: {
      writable: false,
      configurable: false
    }
  }); */

  return public;
}

const david = factoryObject({
  name: 'David',
  path: 'Web Developer',
});

console.log(david);
