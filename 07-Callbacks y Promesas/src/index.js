import './styles.css';
import { buscarHeroe } from './js/callbacks'



console.warn('---- Callbacks y Promesas ----')

const heroeId = 'capi';

buscarHeroe( heroeId, ( heroe ) => {
    console.log( heroe );
});