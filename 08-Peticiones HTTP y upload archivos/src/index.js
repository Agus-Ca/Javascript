import * as CRUD from './js/crud-provider';


// CRUD.getUsuario( 2 ).then( console.log );

// CRUD.crearUsuario({ name: 'Agustin', job: 'Sw Dev'}).then( console.log );

CRUD.actualizarUsuario( 1, { name: 'Melisa', job: 'Developer'}).then( console.log );