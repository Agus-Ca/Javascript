class Persona {
    //'use strict' // viene por defecto aun que no lo pongamos

    constructor( nombre = `sin nombre`, codigo = `sin codigo`, frase = `sin frase` ) {
        console.log(`Hola desde el ctor!`);
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    static _conteo = 0;

    nombre = ``;
    codigo = ``;
    frase = ``;
    comida = ``;

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    static get getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined... JS... no lo entenderias...
        console.log( `Hola, soy un metodo estatico!` );
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


console.warn(`=== Getters y Setters ===`);
spiderman.setComidaFavorita = `Pie de cereza de la tia May`;
console.log( spiderman );
console.log( spiderman.getComidaFavorita );

spiderman.nemesis = `Duende Verde`; // Es algo feo que acepta JS


console.warn(`=== Miembros estaticos ===`);
console.log(`Conteo estatico`, Persona._conteo );
console.log( Persona.getConteo );
Persona.mensaje();

Persona.propiedadExterna = `prop externa`; // aca creamos una propiedad estatica... JS
console.log( Persona );