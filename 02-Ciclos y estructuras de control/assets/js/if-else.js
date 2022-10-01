// dentro de la clausula del if debemos de poner:
// un boolean / undefined / null / asignacion

let a = 11;
if ( a > 10 ) {
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log( 'A es menor a 10' );
}

const hoy = new Date();
console.log({ hoy });
let dia = hoy.getDay();
console.log({ dia });
if( dia === 0 ) {
    console.log('Es domingo');
} else if ( dia === 1 ) {
    console.log('Es lunes');
} else if ( dia === 2 ) {
    console.log('Es martes');
} else {
    console.log('No es ni domingo ni lunes ni martes')
}

// = asignacion
console.log( a = 11 );
// == compara valores
console.log( a == '11' );
// === compara valores y tipos
console.log( a === 11 );

// dia de la semana sin usar if else ni switch, solo objetos
dia = 3;
let diasSemana = [ 'domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' ];
console.log( diasSemana[dia] );

const diasLetras = {
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miercoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sabado',
};
console.log( diasLetras[dia] || 'Dia no definido' );



console.log('Fin del programa');