const alumno = {
  name: "David",
  age: 23,
  aprovedCourses : [],

  addNewCourse(newCourse){
    console.log('This', this);
    console.log('This.aprovedCourses', this.aprovedCourses);
    this.aprovedCourses.push(newCourse);
  }
};

Object.defineProperty(alumno, "testNasa", {
  value: "extraterrestres",
  enumerable: true,
  writable: true,
  configurable: true
});

Object.defineProperty(alumno, "terminal", {
  value: "gnome terminal",
  enumerable: false,
  writable: true,
  configurable: true
});

Object.defineProperty(alumno, "os", {
  value: "linux-PopOs",
  enumerable: true,
  writable: false,
  configurable: true
});

Object.defineProperty(alumno, "browser", {
  value: "brave",
  enumerable: true,
  writable: true,
  configurable: false
});

console.table(Object.getOwnPropertyDescriptors(alumno));
