import '../css/componentes.css';
// import webpacklogo from '../assets/imgs/webpack-logo.png'



export const saludar = ( nombre ) => {
    console.log(`Creando etiqueta h1`);

    const h4 = document.createElement(`h4`);
    h4.innerText = `Hola, ${nombre}`;

    document.body.append( h4 );

    // img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}