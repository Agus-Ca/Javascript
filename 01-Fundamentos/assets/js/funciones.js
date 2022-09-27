function saludar() {
    console.log('Hola, te saludo!');
}

saludar();
saludar();

const saludar2 = function saludar() {
                    console.log('Hola, te saludo2!');
                 };

saludar2();
saludar2();

// Argumentos

function saludarte( nombre ) {
    console.log( 'Hola, ' + nombre + '!');
}

saludarte( 'Agus' );
saludarte( 'Agus' );

const saludarte2 = function saludar( nombre ) {
                       console.log( arguments );
                       console.log( 'Hola2, ' + nombre + '!');
                   };

saludarte2( 'Agu' );
saludarte2( 'Agu', 40, true, 'Mendoza' );

// Funciones flecha o lambda functions
const saludarFlecha = () => {
    console.log('Hola, te saludo flecha!');
}

saludarFlecha();

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola, te saludo ' + nombre + ' flecha!');
}

saludarFlecha2('AgusF');

// return
// si no hay return, retorna undefined
function saludarReturns() {
    console.log('Hola, te saludo!');
    return 1;
    console.log( 'Codigo posterior al return no se ejecuta' );
}
let retorno = saludarReturns();
console.log({ retorno });

function sumar( a, b ) {
    return a + b;
};
console.log( sumar( 2, 3 ) );

const sumar2 = ( a, b ) => {
    return a + b;
};
console.log( sumar2( 2, 3 ) );

const sumar3 = ( a, b ) => a + b;
console.log( sumar3( 2, 3 ) );

function getRandom() {
    return Math.random();
}
console.log( getRandom() );
const getRandom2 = () => Math.random();
console.log( getRandom2() );