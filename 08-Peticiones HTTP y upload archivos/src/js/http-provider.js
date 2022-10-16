const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset  = 'zrfdqmk2';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dsvz51ji4/upload';



// fetch( jokeUrl ).then( resp => {
//     resp.json().then( ({ id, value }) => {
//         console.log( id );
//         console.log( value );
//     });
// });

// fetch( jokeUrl )
//     .then( resp => resp.json() )
//     .then( ({ id, value }) => {
//         console.log({ id, value });
//     });

const obtenerChiste = async () => {
    try {
        const resp = await fetch( jokeUrl );
        if( !resp.ok ) throw 'No se pudo realizar la peticion';
        const { icon_url, id, value} = await resp.json();
        return { icon_url, id, value};
    } catch ( err ) {
        throw err; 
    }


}

const obtenerUsuarios = async () => {
    const resp = await fetch( usuariosUrl );
    const { data: usuarios } = await resp.json();
    
    return usuarios;
}

// archivoSubir :: file
const subirImagen = async ( archivoSubir) => {

    var formdata = new FormData();
    formdata.append("upload_preset", cloudPreset);
    formdata.append("file", archivoSubir );

    var requestOptions = {
        method: 'POST',
        body: formdata
    };

    try {
        const resp = await fetch( cloudinaryUrl, requestOptions );
        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }
    } catch {
        throw await resp.json();
    }

    
}



export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}