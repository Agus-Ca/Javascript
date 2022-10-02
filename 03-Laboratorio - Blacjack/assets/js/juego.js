/**
 * REFERENCIAS:
 * 2C = two of clubs
 * 2D = two of diamond
 * 2C = two of hearts
 * 2S = two of spades
 */

// Variables:
let deck           = [];
const cardTypes    = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

let playerPoints   = 0,
    computerPoints = 0;


// HTML references
const btnAskForCard = document.querySelector('#btnAskForCard');
const btnStopGame   = document.querySelector('#btnStopGame');

const points           = document.querySelectorAll('small');
let playerPointsHTML   = points[0];
let computerPointsHTML = points[1];

const divPlayerCards   = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');


// Functions:
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

const computerTurn = ( ) => {
    do {
        const card = askForCard();
        computerPoints += cardValue( card );
        computerPointsHTML.innerText = computerPoints;
    
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${card}.png`;
        imgCard.classList.add('carta');
        divComputerCards.append( imgCard );
    } while ( (computerPoints < playerPoints) && (playerPoints <= 21) );
}


// Execute:
createDeck();
cardValue(askForCard());


// Events:
btnAskForCard.addEventListener('click', () => {
    const card = askForCard();
    playerPoints += cardValue( card );
    playerPointsHTML.innerText = playerPoints;

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('carta');
    divPlayerCards.append( imgCard );

    if ( playerPoints > 21 ) {
        console.warn('You have lost the game!');
        btnStopGame.disabled   = true;
        btnAskForCard.disabled = true;
        computerTurn();
    } else if ( playerPoints === 21 ) {
        console.warn('You got 21! GREAT!!!');
        btnStopGame.disabled   = true;
        btnAskForCard.disabled = true;
        computerTurn();
    }
});

btnStopGame.addEventListener('click', () => {
    btnAskForCard.disabled = true;
    btnStopGame.disabled = true;

    computerTurn();
});