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
alert (precioMayorista);

let precioCuotas = dividir (suma(precioProducto, iva (precioProducto)), cuotas);
alert (precioCuotas);

let costo = resta (precioProducto, renta);

//Salida cuotas//

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





