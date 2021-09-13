class Servicio{
    constructor (nombre, precio, frecuencia) {
        this.nombre = nombre;
        this.precio = precio;
        this.frecuencia = frecuencia;
    }
    mostrarMensaje() {
        alert (this.nombre + " tiene un valor de $" + this.precio);
    }
}
function crearServicios(nombre, precio, frecuencia){
    return new Servicio(nombre, precio, frecuencia);
};
function main(){
// base de servicios hardcodeada
const servicios = [];
servicios.push(crearServicios("Interconsulta", 1250, "unica"));
servicios.push(crearServicios("Tratamiento Cognitivo Conductual", 8900, "Regular"));
servicios.push(crearServicios("Consulta nutricional", 3500, "unica"));
let carrito = seleccionarServicios(servicios);
mostrarCarrito(carrito);
}
function seleccionarServicios(servicios) {
    const carrito = [];
    alert("Seleccione los servicios que desea agregar a su carrito");
    for(servicio of servicios) {
        let seleccion = confirm(servicio.nombre + " tiene un costo de $" + servicio.precio + " y una frecuencia " + servicio.frecuencia + "\n ¿Desea agregarlo al carrito?");
        if (seleccion) {
            carrito.push(servicio);
        }
    }
    return carrito;
}
function mostrarCarrito(carrito) {
    let seleccionados = " - ";
    for(servicio of carrito){
        seleccionados += servicio.nombre + " - ";
    };
    alert("Los servicios seleccionados son: \n" + seleccionados);
};

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





