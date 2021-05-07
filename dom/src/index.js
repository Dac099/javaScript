const url = "https://platzi-avo.vercel.app/api/avo";
const base_url = "https://platzi-avo.vercel.app/";
const mount = document.querySelector('#main-container');
mount.addEventListener('click',function alerta(event){
    if (event.target.nodeName === "H2"){
        alert('Gracias por la compra');
    }
});
//API intl
//Sirve para dar formato a fechas y monedas.
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en',{
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
}

/**
 * Para este proyecto vamos a utilizar la web API fetch. Para uzarla:
 * 
 *      Hay que conectarnos al servidor
 *      Procesar la respuesta, y converirla a JSON
 *      Ya que tengamos el JSON vamos a obten, y vamos a renderizar en browser
 */

// 1. Conectandonos al servidor
    //fetch funciona con promesas, el response nos proporciona .
window.fetch(url)
    //El response de la promesa lo pasamos a JSON.
    .then(res => res.json())
    //Ya que tenemos el JSON vamos acceder al atributo que es un arreglo <<data>>
    //Cada elemento del arreglo es un objeto
    .then(responseJson => { 
        const itemsData = []
        responseJson.data.forEach(item => {
            //Crear imagen
            const image = document.createElement('img');
            //Los nodos de imagenes siempre tienen la URL en la propiedad src
            image.src = base_url+item.image;
            image.className = "item-img";

            //Crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "item-title";

            //Crear precio
            const price = document.createElement('p');
            price.textContent = formatPrice(item.price);
            price.className = 'item-price';

            //Creamos un contenedor para nuestros elementos
            const container = document.createElement('section');
            container.className = "container";
            container.append(image,title,price);

            //Guardamos cada contenedor con sus elementos en el arreglo
            itemsData.push(container);
        });
        //Usamos el spread operator para agregar los contenedores a nuestro proyecto
        mount.append(...itemsData);
    });
