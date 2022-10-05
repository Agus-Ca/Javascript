class Persona {

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    getInfo() {
        console.log( `Info: ${this.nombre}, ${this.apellido}, ${this.pais}` );
    }
}

const nombre1   = `Agustin`,
      apellido1 = `Casado`,
      pais1     = `Argentina`;
const persona1 = new Persona( nombre1, apellido1, pais1 );
persona1.getInfo();


const agus = {
    nombre:   `Eduardo`,
    apellido: `Ciafrelli`,
    pais:     `Argentina`
}
// const persona2 = new Persona( agus.nombre, agus.apellido, agus.pais );
const persona2 = Persona.porObjeto( agus );
persona2.getInfo();