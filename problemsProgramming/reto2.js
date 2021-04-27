//Creador de contrasenias 

const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const capitalAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const specialCharacters = ['!','¡','-','_','#','$','%','^','?','¿','/'];
const DEFAULTlENGTH = 12/4;
let password = '';

for(let i = 0; i <= DEFAULTlENGTH - 1; i++){
    password += lowerAlphabet[Math.floor(Math.random() * (lowerAlphabet.length))];
    password += capitalAlphabet[Math.floor(Math.random() * (capitalAlphabet.length))];
    password += numbers[Math.floor(Math.random() * (numbers.length))];
    password += specialCharacters[Math.floor(Math.random() * (specialCharacters.length))];
}

console.log(password);
