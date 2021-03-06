/* Objeto de Servicios*/  

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


let carrito = getElementById ("carrito")
let alCarro = document.createElement ("div")
alCarro.textContent = "Has seleccionado un servicio"
carrito.appendChild (alCarro);


function mostrarCarrito(divCarrito) {
    let seleccionados = " - ";
    for(servicio of carrito){
        seleccionados += servicio.nombre + " - ";
    };
    alert("Los servicios seleccionados son: \n" + seleccionados);
};


var tiendaVariable = document.getElementById ("tiendaJs");
console.log (tiendaVariable);
tiendaVariable.innerHTML = "Nuestra Tienda";
tiendaVariable.style.color = "black";

/* Boton evento al carrito*/ 
$(document).ready(() => {
    
function botonCompra(servicios) {
    const carrito = [];
    for(servicio of servicios) {
        $("#card").appendChild( 
                                <div>
                                <button class="boton">Comprar</button>
                                </div>

        )

    $('.boton$(servicio.id)!').on('click', function(){
        alert ("Compraste $(this.nombre)")
    })
}

    $("h1").fadeOut("slow", function());


var boton = document.event.target.id (boton)

const divCarrito = document.getElementById ("divCarrito");
console.log (divCarrito);

const a = document.createElement ("a")
a.textContent = "Carrito"
divCarrito.appendChild (a);



/* Funcion para acceder al carrito*/

function guardarLocalStorage(){

let userName = "nombre";
let password = "pass";
let login = false;


do{
    let userName=prompt ("Ingrese su usuario");
    let password= prompt ("Ingrese su contraseña");
    login = ((userName==nombre) && (password=pass))
}while (!login)


localStorage.setItem ("userName", JSON.stringify(userName));

}

function obtenerLocalStorage(){
    let userName = localStorage.getItem ("userName");
    console.log (userName);

}

function guardarLocalStorage(){

        const servicios = [];
        servicios.push(crearServicios("Interconsulta", 1250, "unica"));
        servicios.push(crearServicios("Tratamiento Cognitivo Conductual", 8900, "Regular"));
        servicios.push(crearServicios("Sesion Psicologia", 3500, "unica"));
    
    localStorage.setItem ("servicios", JSON.stringify (servicios));
}

function obtenerLocalStorage(){
    const servicios = localStorage.getItem ("servicios");
    console.log (servicios);
}
function traerLocalStorage(){
    const servicios = JSON.parse( localStorage.getItem ("servicios"));
}


//preguntar qué servicio -- filtrar búsqueda --> 
//mostrar características
//pedir confirmación de agregar
/* const servicios = [];
let continuar = false;
do {
    let nombreServ = prompt("");
    let precioServ = prompt("");
    let frecuenciaServ = prompt("");
    servicios.push(crearServicios(nombreServ, precioServ, frecuenciaServ));
    continuar = confirm("¿Desea salir?")
} while(continuar); */





