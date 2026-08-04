let producto = [
    {
        name: "Vestido",
        description: "Descripcion del producto",
        precio: 50,
        img: "IMG/ROPA/images.jpg",
        stock: 8
    },
    {
        name: "Vestido",
        description: "Descripcion del producto",
        precio: 50,
        img: "IMG/ROPA/images.jpg",
        stock: 8
    },
    {
        name: "Vestido",
        description: "Descripcion del producto",
        precio: 50,
        img: "IMG/ROPA/images.jpg",
        stock: 8
    }
]

const contenedor = document.getElementById("productos");

for (let i = 0; i < producto.length; i++) {

    const product = producto[i];

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