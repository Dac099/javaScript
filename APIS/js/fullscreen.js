const openBtn = document.querySelector('#abrir-pantalla-completa');
const closeBtn = document.querySelector('#salir-pantalla-completa');

openBtn.addEventListener('click', openFullScreen);
closeBtn.addEventListener('click', closeFullScreen);

function openFullScreen(){
    document.documentElement.requestFullscreen();
}

function closeFullScreen(){
    document.exitFullscreen();
}