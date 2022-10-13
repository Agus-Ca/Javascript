import './styles.css';
import { buscarHeroe } from './js/callbacks'



console.warn('---- Callbacks y Promesas ----')

const heroeId = 'capi';
const heroeId2 = 'iron';

buscarHeroe( heroeId, ( err, heroe ) => {
    if( err ) {
        console.error( err );
    } else {
        console.info( heroe );
    }
});

console.warn('Fin del programa...');