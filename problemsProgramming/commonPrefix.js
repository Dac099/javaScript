//Write a function to find the longest common prefix string amongst an array of strings
var longestCommonPrefix = function(strs){
    let subString = "";
    for(let i = 0; i < strs[0].lenght; i++){
        subString += strs[0][i];
        for(let j = 1; j < strs.lenght; j++){
            if(subString != strs[j][i]){
                break;
            }
        }
    }
    return subString;
};

const WORDS = ["banana", "banal", "bandera"];
console.log(longestCommonPrefix(WORDS));
