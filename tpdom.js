/* TP DOM */
let titulo = document.getElementsByClassName ("titulo1");
let formulario = document.getElementsByClassName ("formulario");
let opciones = document.getElementsByClassName ("opciones");
console.log (titulo.innerHTML);
console.log (formulario.innerHTML);

if (formulario != opciones) {alert ("Ingresa una opcion")}
else {alert ("Pronto te enviaremos las caracteristicas de nuestro servicio")};

do {
    alert ("Ingresa un resultado valido");

}while (formulario= !opciones);

let nombre = prompt ("Ingresa tu nombre");
let edad = prompt ("Ingresa tu edad");
let problematica = prompt ("Ingresa tu motivo de contacto");

if (nombre && edad && problematica){
    let cliente = document.createElement ('h1');
    cliente.textContent = nombre, edad, problematica;
    let contacto = document.getElementsByClassName ('contacto');
    contacto.appendChild (cliente);
}


