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

class Heroe extends Persona {

    constructor( nombre, codigo, frase, clan ) {
        super( nombre, codigo, frase );
        this.clan = clan;
    }

    clan = `sin clan`;

    quienSoy() {
        console.log( `Soy ${ this.nombre } de ${ this.clan }` );
        super.quienSoy();
    }
}

const spiderman = new Heroe( `Peter Parker`, `Spiderman`, `El amigable hombre araña` );
console.log( spiderman );
spiderman.quienSoy();