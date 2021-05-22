var isPalindrome = function(x){
    if(String(x).split("").reverse("").join("") === String(x)){
        return true;
    }else{
        return false;
    }
}