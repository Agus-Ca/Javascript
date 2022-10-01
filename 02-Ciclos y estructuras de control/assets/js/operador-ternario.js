/**
 * Dias de semana abrimos a las 11,
 * Fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy...
const diaActual = 1; // 0: domingo, 1: lunes...
const horaActual = 11;
console.log({ diaActual, horaActual})

let horaApertura;
let mensaje; // Esta abierto || Esta cerrado, hoy abrimos a las XX

// // if ( diaActual === 0 || diaActual === 6 ) {
// if ( [0, 6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de la semana');
//     horaApertura = 11;
// }
horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }
mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje });