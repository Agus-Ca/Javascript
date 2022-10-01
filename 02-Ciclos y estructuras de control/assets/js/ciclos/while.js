const carros = ['Ford', 'Mazda', 'Honda', 'Toyora'];
let i = 0;

while ( i < carros.length ) {
    console.log( carros[i] );
    i++;
}

i = 0;
while ( carros [i] ) {
    if ( i === 2 ) {
        //break; // sale de la ejecucion del bucle
        i++;
        continue; // va a la siguiente iteracion
    }
    console.log( carros[i] );
    i++
}