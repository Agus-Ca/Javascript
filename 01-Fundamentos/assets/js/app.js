alert('Hola desde app.js');

console.log('Hola mundo! Desde .js');

let a = 10;
var b = 10;   // no sobreescribe el objeto global window
const c = 10; // no sobreescribe el objeto global window

a = 20;
b = 20;
// c = 20; Error dado que es una constante

let d = 4;
var e = 5;

let f = 6,
    g = 7,
    h = f + g;

console.log( 'f', f );
console.warn( 'g', g );
console.error( 'h', h );

console.log({ h });

console.log('%c Mis variables', 'color:blue; font-weight:bold');

let i = 'Hola ',
    j = 'Spiderman';

console.table({f, g, h, i, j});

const SALUDO = i + j;

i = 'Hola de nuevo ';

var miNombre = 'Agustin';