let myBirthday = new Date(1999, 03, 16);
let today = new Date();
const MDAY = 24 * 60 * 60 * 1000 * 24;

let days = Math.trunc((today - myBirthday)/ MDAY);
