const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Buena reaccion alergica a picaduras de araña'
    }
}



export const buscarHeroe = ( id, callback ) => {
    const heroe = heroes[id];

    if ( heroe ) {
        callback( null, heroe );
    } else {
        callback(`No existe un heroe con el id ${ id }`);
    }

}