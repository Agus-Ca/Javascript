// Objetos literales: son objetos que tienen pares de valores
// Tienen una propiedad (llave) y un valor
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lon: -118.701
    },
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima pelicula': 'Infinity War',
}

console.log( personaje );
console.log( 'Nombre:', personaje.nombre );
console.log( 'Nombre:', personaje['nombre'] );
console.log( 'Edad:',   personaje.edad);
console.log( 'Coords:', personaje.coords );
console.log( 'Lat:', personaje.coords.lat );

console.log( 'No. Trajes:', personaje.trajes.length );
console.log( 'Ultimo traje:', personaje.trajes[personaje.trajes.length - 1] );

const x = 'vivo';
console.log( 'Vivo:', personaje[x] );

console.log( 'Ultima pelicula:', personaje['ultima pelicula'] );

// Mas detalles
delete personaje.edad;
console.log( personaje );

personaje.casado = true;
console.log( personaje );

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje );
personaje.dinero = 1000000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Mendoza, Argentina'; // !!!
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades );
const valores = Object.values( personaje );
console.log( valores );