// Trabajo 4 Simulador//

// Variables //
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
const dividir = (a,b) => a / b;
const multiplicar = (a,b) => a * b;

let precioProducto = 990;
let descMayorista = 80;
let cuotas= 12;
let renta= 30;


let precioMayorista = resta(suma (precioProducto, iva (precioProducto)), descMayorista);
console.log (precioMayorista);

let precioCuotas = dividir (suma(precioProducto, iva (precioProducto)), cuotas);
console.log (precioCuotas);

let costo = resta (precioProducto, renta);
console.log (costo);

//Salida cuotas//

let entradaBienvenido = prompt ("Que producto quieres?");
let salidaBienvenido = (entradaBienvenido);
alert (("Me interesa") + " " + (entradaBienvenido));

let entradaCosto= prompt ("Cuantas cuotas quieres?");
entradaCosto= parseInt (entradaCosto);
let salidaCosto= (precioProducto) / entradaCosto;
alert (("Este es el valor de la cuota") + " " + (salidaCosto));

// Salida calculo precio sin IVA// 

let entrada = prompt ("Ingresa el costo");
entrada= parseInt (entrada);
let salida= (renta) + entrada; 
alert (("Este es el precio sin IVA") + " " + (salida));

// Precio Final con IVA// 

let entradacIva = prompt ("Ingresa el precio sin impuestos");
entradacIva= parseInt (entradacIva);
let salidacIva = ((entradacIva) + iva (entradacIva));
alert (("Precio final") + " " + (salidacIva));


// TP 6: Objetos//

class Mercaderia{
    constructor () {
        this.nombre = "Psicologia";
        this.precio = 3300;
        this.frecuencia = "regular";
    }
    sumaIva() {
        return this.precio * 1.21;
    }

    hablar () {
        alert (this.nombre + " " + this.precio);
    }
}

const mercaderia1 = new Mercaderia ("Sesion Psicologia", 1250, "unica");
const mercaderia2 = new Mercaderia ("Tratamiento Cognitivo Conductual", 8900, "Regular");
mercaderia1.hablar();
mercaderia2.sumaIva();
mercaderia2.hablar();

/* Trabajo en clase Json*/

let saludo= "Hola";
let usuarios= ["Carla", "Yanina", "Ximena", "Josefina"];

localStorage.setItem ("hola", saludo);

let usuariosJson = JSON.stringify (usuarios);

localStorage.setItem ("alumnos", usuariosJson);

localStorage.getItem ("alumnos", usuariosJson);

JSON.parse (localStorage.getItem ("alumnos", usuariosJson));




