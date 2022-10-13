import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';



console.warn('---- Callbacks ----');

const heroeId = 'capi';
const heroeId2 = 'iron';

buscarHeroeCallback( heroeId, ( err, heroe ) => {
    if( err ) { return console.warn( err ); }

    buscarHeroeCallback( heroeId2, ( err2, heroe2 ) => {
        if( err2 ) { return console.warn( err2 ); }

        console.info(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision.`);
    });
});


console.warn('---- Promesas ----');

// buscarHeroe( heroeId ).then( heroe => {

//     buscarHeroe( heroeId2 ).then( heroe2 => {
//         console.info(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision.`);
//     });
// });

Promise.all([ buscarHeroe(heroeId), buscarHeroe(heroeId2) ])
    .then( ([heroe1, heroe2]) => {
        // esto se ejecuta si ninguna promesa falla
        console.info(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision.`);
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log('Se termino el promise.all');
});



console.warn('Fin del programa...');