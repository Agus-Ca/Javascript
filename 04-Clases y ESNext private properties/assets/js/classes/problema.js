// PROBLEMA

const Agu = {
    nombre: 'Agustin',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const Mati = {
    nombre: 'Matias',
    edad: 26,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const Facu = {
    nombre: 'Facundo',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

Agu.imprimir();


// SOLUCION antigua
// esto se deberia de crear con la palabra new
// compatible con navegadores muy viejos
function Persona( nombre, edad ) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad   = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);