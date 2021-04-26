const wordsToRepeat = (wordToRepeat,times) => {
    if(times == 1){
        return wordToRepeat;
    }else{
        return wordToRepeat + wordsToRepeat(wordToRepeat, times - 1);
    }
};

let strConstruction = '';
strConstruction += wordsToRepeat('Hola/',5);
console.log(strConstruction);