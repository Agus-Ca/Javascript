class Rectangulo {
    
    constructor( base = 0, altura = 0 ) {
        this.base   = base;
        this.altura = altura;
        
        this.#area = base * altura;
    }

    #area = 0;

    #privateMethod() {
        console.log(`Hola, soy un metodo privado!`)
    }

    callPrivateMethod() {
        this.#privateMethod();
    }
}

const rectangulo = new Rectangulo( 10, 15 );

// rectangulo.#area = 100; // mal...
rectangulo.callPrivateMethod();

console.log( rectangulo );