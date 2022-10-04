class Persona {
    //'use strict' // viene por defecto aun que no lo pongamos

    constructor( nombre = `sin nombre`, codigo = `sin codigo`, frase = `sin frase` ) {
        console.log(`Hola desde el ctor!`);
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    nombre = ``;
    codigo = ``;
    frase = ``;

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

let spiderman = new Persona();
console.log( spiderman );
spiderman = new Persona( `Peter Parker`, `Spiderman`, `El amigable hombre araña` );
console.log( spiderman );

const ironman = new Persona(`Tony Stark`, `IronMan`, `Yo soy IronMan`);
console.log( ironman );

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase();
ironman.miFrase();