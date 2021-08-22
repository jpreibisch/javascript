//let entrada = prompt ("Ingresa tu nombre");
//let salida = entrada + "Bienvenido/a";
//alert (salida);

var numeroA= parseInt ("10");


let entrada= prompt ("Ingresa cuantos zapatos tienes");
entrada= parseInt (entrada);
let salida= entrada + (numeroA);
alert (salida);

// Trabajo 2//
let edad= prompt ("Indique su edad");
let nombre=  prompt ("Indique su nombre");


if ((edad > 55) || (nombre== "joaquin")){alert ("Bienvenido Joaquin");
}else{
    alert("error: tu no eres joaquin");
}

// Trabajo 2 parte B//

let partidos= prompt ("Indique cantidad de partidos jugados");
let club=  prompt ("Indique su club")

if ((partidos==15) && (nombre!="River")) {alert ("Ingresada");
}else{
    console.log ("Intenta nuevamente");
}

// Trabajo 3 parte A //
let usuario= "usuario";
let pass= "pass123";
let resultado= false;

do{
    let user=prompt ("Ingrese su usuario");
    let password= prompt ("Ingrese su contraseña");
    resultado= ((user==usuario) && (password=pass))
}while (!resultado)


// Trabajo 3 parte B//

for (i=1;i<=1000;i+=2) 
   	document.write(i)




