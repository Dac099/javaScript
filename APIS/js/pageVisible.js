document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Play Video');
    }else{
        console.log('Pause Video');
    }
})