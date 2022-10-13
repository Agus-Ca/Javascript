import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';


console.warn('---- Promise.race ----');

promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log );

Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
       .then( console.log )
       .catch( console.warn );