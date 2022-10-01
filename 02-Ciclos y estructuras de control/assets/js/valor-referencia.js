// todos los tipos primitivos se pasan por valor
// todos los objetos son pasados por referencia

let a = 10;
let b = a;
console.log({ a, b });

a = 30;
console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = { ...juan };
console.log({ juan, ana });

ana.nombre = 'Ana';
console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}
let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
console.log({ peter, tony });

// para arreglos hay dos alternativas
const frutas = ['manzana', 'pera', 'piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutasMas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('mango');
otrasFrutasMas.push('frutilla');
console.table({ frutas, otrasFrutas, otrasFrutasMas });