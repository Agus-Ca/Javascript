import { buscarHeroe, buscarHeroeAsync } from './promesas';



const capiId = 'capi';
const ironId = 'iron';

buscarHeroe( capiId )
    .then( heroe => console.log( heroe ) )
    .catch( console.warn );

buscarHeroeAsync( ironId )
    .then( heroe => console.log( heroe ) )
    .catch( console.warn );