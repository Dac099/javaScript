//Importamos el archivo JS que controla lazy loading
import { registerImg } from '../src/lazy.js';

//mount es en donde se van a cargar las imagenes
const mount = document.querySelector('#images');
//btn-add agregara las imagenes cuando sea presionado
const btn_add = document.querySelector('.btn-img');

//Controlan el numero de imagenes
const MAX = 122;
const MIN = 1;

//Esta funcion permite crear un div container para cada imagen
const createNodeImg = () => {
    //El numero aleatorio sirve de control para llamar las imagenes con la URL
    let rndNumber = Math.floor(Math.random() * (MAX-MIN)) + MIN;
    const image = document.createElement('img');
    image.className = 'img-data';
    image.dataset.src = `https://randomfox.ca/images/${rndNumber}.jpg`;

    const card = document.createElement('div');
    card.append(image);
    card.className = 'image-card';
    return card;
}


//Esta funcion crea un container con una imagen y lo agrega a mount
const addImage = () => {
    const newImg = createNodeImg();
    mount.append(newImg);
    //Esta funcion se llama desde el archivo importado
    registerImg(newImg);
}

btn_add.addEventListener('click',addImage);

