const regresaTrue = () => {
    console.log('regresaTrue()');
    return true;
};
const regresaFalse = () => {
    console.log('regresaFalse()');
    return false;
};

console.warn('=== NOT o negacion ==='); // !
console.log( true );
console.log( false );
console.log( !true );
console.log( !false );
console.log( !regresaTrue() );
console.log( !regresaFalse() );


console.warn('=== AND ==='); // devuelve tru si todos los valores son true
console.log( true && true );
console.log( true && false );
console.log( true && !false );
console.log( regresaFalse() && regresaTrue() ); // => regresaFalse() false


console.warn('=== OR ==='); // regresa true si al menos uno regresa true
console.log( true || false );
console.log( false|| false );
console.log( regresaTrue() || regresaFalse() );// => regresaTrue() true


console.warn('=== Asignaciones ===');
const soyUndefined = undefined;
const soyNull      = null;
const soyTrue      = true;
const soyFalse     = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse; // devuelve el ultimo valor hasta con el primer valor false
const o1 = soyFalse || 'Ya no soy false'; // devuelve el primer valor no falso
const o2 = soyFalse || soyUndefined || soyNull || 'Ya no soy false 2';
const o3 = soyFalse || soyUndefined || soyNull || regresaTrue() || 'Ya no soy false 3';

console.log({ a1, a2, o1, o2, o3 });