import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';



console.warn('---- Callbacks ----');

const heroeId = 'capi';
const heroeId2 = 'iron';

buscarHeroeCallback( heroeId, ( err, heroe ) => {
    if( err ) {
        console.error( err );
    } else {
        console.info( heroe );
    }
});


console.warn('---- Promesas ----');

buscarHeroe( heroeId ).then( heroe => {
    console.log(`Enviando a ${heroe.nombre} a la mision!`)
});



console.warn('Fin del programa...');