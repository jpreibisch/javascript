//1. Función que reciba Nombre del servicio, Frecuencia  y Precio y dentro, cree el objeto ItemCarrito con esos datos y lo pushée dentro del array carrito
//1b otra similar para el stock pero que además le asigne a cada servicio un id numérico en base al largo del array servicios
// 2. Función para guardar en storage el JSON del array carrito
// 3. Función que cree las tarjetas de producto en base al array stock
//3b para crear la filas de productos elegidos donde se muestre el carrito
// 4. Función inicio que primero chequée si ya hay algo en Storage y sino llame a la función 1 pasando los datos hardcodeados y luego a 2 para guardar el array carrito
// 5. Función onclick que al clickear tome el id del botón clickeado, lo busque en stock y  pase los datos de el servicio que matcheó a la función 1 para crear y guardar en carrito, luego llame a la función 2 para que sobre escriba en el Storage y vuelva a llamar a la función b3 para crear las tarjetas
// Llamar a inicio.

/* Objeto de Servicios*/  

//1. Función que reciba Nombre del servicio, Frecuencia  y Precio y dentro, cree el objeto ItemCarrito con esos datos y lo pushée dentro del array carrito
class Servicio{
    constructor (nombre, precio, frecuencia, imagenURL) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.frecuencia = frecuencia;
        this.imagenURL = imagenURL;
    }
    mostrarMensaje() {
        alert (this.nombre + " tiene un valor de $" + this.precio);
    }
}
class ItemCarrito{
    constructor (id) {
        this.id = id;
        this.cantidad = 1;
    }
}

function crearServicio(nombre, precio, frecuencia, imagenURL, arrayServicios){
    let id = arrayServicios.length;
    arrayServicios.push(new Servicio(id, nombre, precio, frecuencia, imagenURL));
};

function crearTarjetas (arrayServicios){


// base de servicios hardcodeada

const listaServicios = [];
crearServicio("Tratamiento Cognitivo Conductual", 8900, "Regular", "/imagenes/tratamiento.jpg", listaServicios);
crearServicio("Interconsulta", 1250, "unica", "/imagenes/interconsulta.jpg", listaServicios);
crearServicio("Sesion Psicologia", 3500, "unica", "/imagenes/sesion.jpg", listaServicios);

}

/* Array de servicios*/ 

function seleccionarServicios(listaServicios) {
    const carrito = [];
    alert ("Seleccione los servicios que desea agregar a su carrito");
    for(servicio of listaServicios) {
        let seleccion = confirm (servicio.nombre + " tiene un costo de $" + servicio.precio + " y una frecuencia " + servicio.frecuencia + "\n ¿Desea agregarlo al carrito?");
        if (seleccion) {
            carrito.push(carrito);
        }
    }
    return carrito;
}


let contenedor = document.getElementById(`containerTarjetas`);
let cardTienda = document.createElement(`<div class="card-tienda"></div>`);

cardTienda.innerHTML = `<div class="card-tienda__img" id="tienda${this.id}" style="background: url("${this.imagenURL}") no-repeat 50% 70% / cover" ></div>
                            <div class="card-tienda__content">
                                <ul class="card-tienda__list">
                                    <li id="tituloTarjeta" class="card-tienda__item">Sesion de Psicologia</li>
                                </ul>
                                <p class="card-tienda__desc">${this.nombre}</p>
                                <button id= "btnPrincipal" class= "btnComprar card-tienda__btn" href="">Comprar</button>
                            </div>
                        </div>`;

contenedor.appendChild (cardTienda);



// 2. Función para guardar en storage el JSON del array carrito
function recuperarCarrito(){

    sessionStorage.setItem (`guardarCarrito`,`carrito`)

    let guardarCarrito = "carrito";
    
    sessionStorage.setItem ("guardarCarrito", JSON.stringify(guardarCarrito));

    for (let i = 0; i < sessionStorage.length; i++){
        let guardarCarrito = sessionStorage.key(i);
        console.log ("guardarCarrito: " + guardarCarrito);
        console.log ("carrito: " + JSON.parse(sessionStorage.getItem(guardarCarrito)));
    }
    
    }


let botonCarrito = document.getElementById ("btnPrincipal")
boton.onclick = () => {crearItemCarrito()};

function crearItemCarrito (){
    if (botonCarrito == `${this.id}`){
       console.log (`${this.id}` + 1);  
    }else {
        new ItemCarrito (id = `${this.id}`)
    
}
};

ItemCarrito.push (carrito);

sessionStorage.setItem (`guardarCarrito`, JSON.stringify(guardarCarrito));



/* Sesion buscar carrito, si hay carrito traerlo sino crearlo.
funcion onclick:
trae carrito guardado en sesion. se convierte para q se pueda usar.
crear funcion crearItemCarrito (carrito) -
busca si algun objeto en el carrito (if else) tiene el mismo id que el servicio desde que se hizo el click. (boton=id "boton +${this.id}").
si esta, le modificas al que te trajo la cantidad (+1) y sino crea un new ItemCarrito pasandole id con el que hiciste la busqueda. 
 en base a donde se produjo el click, lo pushea a carrito y vuelve a guardar en JSON carrito y guardarlo en Session Starge*/

