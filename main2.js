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
    constructor (nombre, precio, frecuencia) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.frecuencia = frecuencia;
    }
    mostrarMensaje() {
        alert (this.nombre + " tiene un valor de $" + this.precio);
    }
}

function crearServicios(id, nombre, precio, frecuencia){
    return new Servicio(id, nombre, precio, frecuencia);
};
function main(){
// base de servicios hardcodeada
const servicios = [];
servicios.push(crearServicios(1,"Interconsulta", 1250, "unica"));
servicios.push(crearServicios(2,"Tratamiento Cognitivo Conductual", 8900, "Regular"));
servicios.push(crearServicios(3,"Sesion Psicologia", 3500, "unica"));

let carrito = seleccionarServicios(servicios);
mostrarCarrito(servicios);
}

/* Array de servicios*/ 

function seleccionarServicios(servicios) {
    const carrito = [];
    alert ("Seleccione los servicios que desea agregar a su carrito");
    for(servicio of servicios) {
        let seleccion = confirm (servicio.nombre + " tiene un costo de $" + servicio.precio + " y una frecuencia " + servicio.frecuencia + "\n ¿Desea agregarlo al carrito?");
        if (seleccion) {
            carrito.push(carrito);
        }
    }
    return carrito;
}

//1b otra similar para el stock pero que además le asigne a cada servicio un id numérico en base al largo del array servicios
// 3. Función que cree las tarjetas de producto en base al array stock
let contenedor = document.createElement ("div");

contenedor.innerHTML = `<li> id: ${servicio.id}</li>
                        <p> servicio: ${servicio.nombre}</p>
                        <b> precio: ${servicio.precio}<b>`;
document.body.appendChild (contenedor);

// 2. Función para guardar en storage el JSON del array carrito
function guardarLocalStorage(){

    let userName = "servicio";
    let password = "pass";
    let login = false;
    
    const carrito = []
  
    
    localStorage.setItem ("userName", JSON.stringify(userName));
    
    }
    

