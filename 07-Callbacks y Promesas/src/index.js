import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroesIfAwait } from './js/await';



// const capiId = 'capi1';

// console.time('await');

// obtenerHeroesArr()
//     .then( heroes => {
//         console.table( heroes)
//         console.timeEnd('await');
//     });

// obtenerHeroeAwait( capiId )
//     .then( heroe => {
//         console.log( heroe )
//         console.timeEnd('await');
//     })
//     .catch( console.warn );

// heroesCiclo();

heroesIfAwait( 'iron' );