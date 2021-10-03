class Producto { 
    constructor(nombre, precio, imagenURL) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagenURL = imagenURL;
    };
};

function crearProducto(nombre, precio, imagenURL,stock){
    stock.push(new Producto(nombre, precio, imagenURL));
};

function mostrarProductos(stock) {
    for (const producto of stock) {
        let info = document.createElement("div");
        info.setAttribute("id", `${producto.nombre}`);
        info.innerHTML = `<div class= "card-container">
                            <img class="imagenProducto" src="${producto.imagenURL}"></img>
                            <div class="card-tienda">${producto.nombre}</div>
                            <div class="card-tienda">${producto.precio}</div>
                            </div>`;
        info.classList.add("producto");
        document.getElementById("card").appendChild(info);
        let boton = document.createElement("button");
        boton.classList.add("btnComprar");
        boton.innerHTML = `AGREGAR AL CARRITO`;
        boton.addEventListener("click", function () {agregar(stock)})
        document.getElementById(`${producto.nombre}`).appendChild(boton);
    };
};

function totalCompra (precio){
    let unidades = parseInt(prompt("Ingrese cuantas unidades desea comprar: "));
    if(unidades) {
    var total = precio * unidades;
    return total;
    }
    return unidades;
};


function agregar(stock){
    let precio = 0;
    let busqueda;
    for(item of stock){
        if(item.nombre.toLowerCase().includes(event.target.parentElement.id.toLowerCase()))
        busqueda = item;
    }
    alert("Usted elegió " + busqueda.nombre + " , presione Aceptar para continuar.");
    precio = busqueda.precio;
    let total = totalCompra(precio);
    
};

function principal () {    
    let stock = new Array;
    // popular stock
    crearProducto("Interconsulta Medica", 3500, "./imagenes/interconsulta.jpg", stock);
    crearProducto("Sesion de Psicologia", 1250, "./imagenes/sesion.jpg", stock);
    crearProducto("Tratamiento Cognitivo Conductual", 8900, "./imagenes/tratamiento.jpg", stock);

    //interacción con HTML
    mostrarProductos(stock);
}
// inicio
principal();

