import { buscarHeroeAsync, buscarHeroe2 } from "./promesas";



const heroesIds = [ 'capi', 'iron', 'spider' ];
const HeroesPromesas = heroesIds.map( buscarHeroe2 );



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

export const obtenerHeroeAwait = async ( id ) => {

    try {

        const heroe = await buscarHeroeAsync( id );
        return heroe;

    } catch ( err ) {
        //si aca pongo un throw en el que lo llama entra por el .catch
        //pero so aca pongo un return, en el que lo llama entra por el .then
        console.log('CATCH!!!');
        //throw err ;
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }

};

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    // const heroes = await Promise.all( HeroesPromesas );
    // //console.log( heroes );

    // heroes.forEach( console.log );

    for await (const heroe of HeroesPromesas) {
        console.log( heroe );
    }

    console.timeEnd('HeroesCiclo');
};

export const heroesIfAwait = async ( id ) => {
    if ( (await buscarHeroeAsync(id)).nombre === "Ironman" ) {
        console.log('Es el mejor');
    } else {
        console.log('Naaah!');
    }
};