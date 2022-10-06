import '../css/componentes.css';



export const saludar = ( nombre ) => {
    console.log(`Creando etiqueta h1`);

    const h4 = document.createElement(`h4`);
    h4.innerText = `Hola, ${nombre}`;

    document.body.append( h4 );
}