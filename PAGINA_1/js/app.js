import productos from "./productos.js";

const carrito = [];

const contadorCarrito = document.getElementById("contador-carrito");

const contenedor = document.getElementById("productos");

function agregarAlCarrito(producto) {

    carrito.push(producto);

    console.log(carrito);

    console.log(`Producto agregado: ${producto.name}`);

    contadorCarrito.textContent = carrito.length;
}

for (let i = 0; i < productos.length; i++) {

    const producto = productos[i];

    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    
        <img src="${producto.img}">
        
        <h2>${producto.description}</h2>

        <p class="font-bold" >S/${producto.precio}</p>

        <p>${producto.stock>0?"Disponible":"Agotado"}</p>

        <button>Agregar al carrito</button>

    `;

    const boton = tarjeta.querySelector("button");

    boton.addEventListener("click", function () {
        agregarAlCarrito(producto)
    });

    contenedor.appendChild(tarjeta);
}