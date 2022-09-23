// strings se pueden usar entre '', "" o ``
 
let nombre = 'Agustin Casado';
console.log( nombre );
nombre = 'Eduardo Ciafrelli';
console.log( nombre );
console.log( typeof nombre );

console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' );

// booleanos
let esVerdad = false;
console.log( typeof esVerdad );

console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' );

// number
let edad = 25;
console.log( typeof edad );
edad = 25.03;
console.log( typeof edad );

console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' );

// undefined
let superPoder = undefined;
console.log( typeof superPoder );

console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' );

// null
let soyNull =  null;
console.log( typeof soyNull );

console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' );

// symbol
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log( typeof symbol1 );
console.log( symbol1 === symbol2 );