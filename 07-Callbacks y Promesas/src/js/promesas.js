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

export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => { // result y reject
        if ( heroe ) {
            resolve( heroe );
        } else {
            reject(`No existe el heroe con el id ${id}`);
        }
    });
}

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2000);
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve('Promesa media');
    }, 1500);
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve('Promesa rapida');
    }, 1000);
});



export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}