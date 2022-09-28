// function crearPersona( nombre, apellido ) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// function crearPersona( nombre, apellido ) {
//     return { 
//         nombre,
//         apellido
//     }
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona( 'Agustin', 'Casado' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}
imprimeArgumentos( 10, true, false, 'Agus', 'Hola' );

const imprimeArgumentos2 = ( edad, ...args ) => {
    //console.log( args )
    return args;
};
// despues del parametro ...algo no pueden venir otros parametros
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2( 10, true, false, 'Agus', 'Hola' );
console.log({ casado, vivo, nombre, saludo });

const { apellido: ape } = crearPersona( 'Agus', 'Casa');
console.log( ape );

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
}

const imprimeProps = ({ nombre, codeName, vivo, edad = 18, trajes }) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
};
imprimeProps( tony );