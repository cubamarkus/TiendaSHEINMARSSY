import productos from "./productos";

console.log(productos);

const contenedor = document.getElementById("productos");

for (let i = 0; i < productos.length; i++) {

    const product = productos[i];

    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    
        <img src="${product.img}">
        
        <h2>${product.description}</h2>

        <p class="font-bold" >S/${product.precio}</p>

        <p>${product.stock>0?"Disponible":"Agotado"}</p>

        <button>Agregar al carrito</button>

    `;
    contenedor.appendChild(tarjeta);
}