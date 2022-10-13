import { buscarHeroeAsync, buscarHeroe2 } from "./promesas";



const heroesIds = [ 'capi', 'iron', 'spider' ];

export const obtenerHeroesArr = async () => {
    
    return await Promise.all( heroesIds.map( buscarHeroe2 ) );

    // const heroesArr = [];

    // for ( const id of heroesIds ) {
    //     //const heroe = await buscarHeroeAsync( id );
    //     heroesArr.push( buscarHeroe2( id ) );
    // }

    // // setTimeout(() => {
    // //    console.log('ObtenerHeroes');
    // //    console.table( heroesArr ); 
    // // }, 1000);

    // return await Promise.all( heroesArr );
};