window.addEventListener('online', updateState);
window.addEventListener('offline', updateState);

function updateState(){
    if(navigator.onLine){
         console.log('Now you are online');
    }else{
        console.log('Now you are not online');
    }
}