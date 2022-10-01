const heroes = ['batman', 'superman', 'mujer maravilla', 'aquaman'];

console.warn('=== Ciclo FOR tradicional ===');
for( let i = 0; i < heroes.length ; i++ ) {
    console.log( heroes[i] );
}

console.warn('=== Ciclo FOR IN ===');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('=== Ciclo FOR OF ===');
for( let heroe of heroes ) {
    console.log( heroe );
}