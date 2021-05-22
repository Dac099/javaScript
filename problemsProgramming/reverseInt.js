// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function(x){
    let num = x;
    let sNumber = num.toString();
    let reverseNumber = "";
    if(sNumber.startsWith("-") === true){
        reverseNumber = reverseNumber.concat(sNumber.charAt(0));
        for(let i = 1; i < sNumber.length; i++){
            reverseNumber = reverseNumber.concat(sNumber.charAt(sNumber.length - i));
        }
        if(parseInt(reverseNumber) > Math.pow(-2, 31) && parseInt(reverseNumber) < Math.pow(2, 31) - 1){
            return parseInt(reverseNumber);
        }else{
            return 0;
        }
    }else{
        for(let i = 1; i <= sNumber.length; i++){
            reverseNumber = reverseNumber.concat(sNumber.charAt(sNumber.length - i));
        }
        if(parseInt(reverseNumber) > Math.pow(-2, 31) && parseInt(reverseNumber) < Math.pow(2, 31) - 1){
            return parseInt(reverseNumber); 
        }else{
            return 0;
        }
    }
}


//Easy solution

let reverseF = function(x){
    const MAX = Math.pow(2, 31)-1;
    const MIN = Math.pow(-2, 31);

    let reverseNumber = Math.sign(x) * Number(String(Math.abs(x).).split("").reverse("").join(""));
    if(reverseNumber > MIN && reverseNumber < MAX) return 0;
    return reverseNumber;
}