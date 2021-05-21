//Para cada dato entry se verifica si se corta por el viewport.
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImg = (entry) => {
    //entry.target es nuestro elemento div container 
    const container = entry.target
    //Su primer hijo es la imagen que contiene
    const image = container.firstChild;
    const url = image.dataset.src;
    image.src = url;
    observer.unobserve(image);
}

//Instanciamos un objeto de la clase.
//Con la funcion filter extraemos el objeto que verifica si un elemento intersecta
//recorremos cada elemento que se nos regresa y se ejecuta la funcion loadImg
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImg)
});

export const registerImg = (img) => {
    observer.observe(img);
};