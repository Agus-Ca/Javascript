/**
 * REFERENCIAS:
 * 2C = two of clubs
 * 2D = two of diamond
 * 2C = two of hearts
 * 2S = two of spades
 */

let deck           = [];
const cardTypes    = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K']

const createDeck = () => {
    for ( let i = 2; i <= 10; i++ ) {
        for ( let cardType of cardTypes )
        deck.push( i +cardType );
    }

    for ( let cardType of cardTypes ) {
        for ( let specialCard of specialCards ) {
            deck.push( specialCard + cardType );
        }
    }

    deck = _.shuffle( deck );
    console.log(deck);
    return deck;
}

const askForCard = () => {
    if ( deck.length === 0 ) throw `There are no more cards in deck`;
    
    const card = deck.pop();
    return card;
}

const cardValue = ( card ) => {
    const value = card.substring( 0, card.length - 1 );
    return ( isNaN(value) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}

createDeck();
cardValue(askForCard());