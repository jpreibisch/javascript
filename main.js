

/* Trabajo Integrador*/


class Mercaderia{
    constructor () {
        this.nombre = "Sesion";
        this.precio = 1500;
        this.frecuencia = "regular";
    }
    sumaIva() {
        return this.precio * 1.21;
    }

    hablar () {
        alert (this.nombre + " " + this.precio);
    }
}

const mercaderia1 = new Mercaderia ("Interconsulta", 1250, "unica");
const mercaderia2 = new Mercaderia ("Tratamiento Cognitivo Conductual", 8900, "Regular");
const mercaderia3 = new Mercaderia ("Consulta nutricional", 3500, "unica");

mercaderia1.hablar();
mercaderia1.sumaIva();
mercaderia2.sumaIva();
mercaderia2.hablar();
mercaderia3.hablar();
mercaderia3.sumaIva();

const productos = [mercaderia, mercaderia1, mercaderia2, mercaderia3];
console.log (productos.length);

let entrada= prompt ("Que servicio quieres contratar?")
productos.forEach(item => console.log(item))
    alert (productos.hablar());


//let entrada = prompt ("Que servicio quieres?");
//productos.find (entrada => entrada =mercaderia1,mercaderia2, mercaderia3());
//console.log (productos.length);
//}while (productos.length != cantidad);
//alert (mercaderia1.hablar(), mercaderia2.hablar(), mercaderia3.hablar());
//alert (productos.hablar());

