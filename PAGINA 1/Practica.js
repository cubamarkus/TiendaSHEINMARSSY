const productos = [

    {
        nombre:"Playera",
        precio:43,
        imagen:"img/playera.jpg",
        stock:5
    },

    {
        nombre:"Vestido",
        precio:54,
        imagen:"img/vestido.jpg",
        stock:0
    },

    {
        nombre:"Jeans",
        precio:65,
        imagen:"img/jeans.jpg",
        stock:3
    },

    {
        nombre:"Gorras",
        precio:57,
        imagen:"img/alexa.jpg",
        stock:4
    },

    {
        nombre:"Camisa",
        precio:60,
        imagen:"img/alexa.jpg",
        stock:4
    }

];


const contenedor = document.getElementById("productos");

for(let i=0;i<productos.length;i++){

    const producto = productos[i];

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("producto");

    tarjeta.innerHTML = `
    
        <img src="${producto.imagen}">
        
        <h2>${producto.nombre}</h2>

        <p>S/${producto.precio}</p>

        <p>${producto.stock>0?"Disponible":"Agotado"}</p>

        <button>Agregar al carrito</button>

    `;

    contenedor.appendChild(tarjeta);

}