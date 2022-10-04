const module = (() => {
    'use strict'

    // Variables:
    let deck           = [];
    const cardTypes    = ['C', 'D', 'H', 'S'], // clubs, diamond, hearts, spades
          specialCards = ['A', 'J', 'Q', 'K'];

    let playersPoints = [];


    // HTML references
    const btnAskForCard = document.querySelector('#btnAskForCard'),
          btnStopGame   = document.querySelector('#btnStopGame'),
          btnNewGame    = document.querySelector('#btnNewGame');

    const pointsHTML = document.querySelectorAll('small');

    const divPlayersCards = document.querySelectorAll('.divCards');


    // Functions:
    const initGame = ( numberOfPlayers = 2 ) => {
        deck = createDeck();

        playersPoints = [];
        for ( let i = 0; i < numberOfPlayers; i++ ) {
            playersPoints.push(0);
        }

        pointsHTML.forEach( elem => elem.innerText = 0 );
        divPlayersCards.forEach( elem => elem.innerHTML = '' );    
        
        btnStopGame.disabled   = false;
        btnAskForCard.disabled = false;
    }

    const createDeck = () => {

        deck = [];

        for ( let i = 2; i <= 10; i++ ) {
            for ( let cardType of cardTypes )
            deck.push( i +cardType );
        }

        for ( let cardType of cardTypes ) {
            for ( let specialCard of specialCards ) {
                deck.push( specialCard + cardType );
            }
        }

        return _.shuffle( deck );;
    }

    const askForCard = () => {
        if ( deck.length === 0 ) throw `There are no more cards in deck`;
        
        return deck.pop();
    }

    const cardValue = ( card ) => {
        const value = card.substring( 0, card.length - 1 );
        return ( isNaN(value) ) ? 
                ( value === 'A' ) ? 11 : 10
                : value * 1;
    }

    const accumulatePoints = ( playerTurn, card ) => {
        playersPoints[playerTurn] = playersPoints[playerTurn] + cardValue( card );
        pointsHTML[playerTurn].innerText = playersPoints[playerTurn];
        return playersPoints[playerTurn];
    }

    const createCard = ( playerTurn ,card ) => {
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${card}.png`;
        imgCard.classList.add('carta');
        divPlayersCards[playerTurn].append( imgCard );
    }

    const determineWinner = () => {

        const [ playerPoints, computerPoints ] = playersPoints;

        setTimeout(() => {
            let mensaje = '';
            if ( playerPoints === computerPoints ) {
                mensaje = 'We have a draw! :c'
            } else if ( (playerPoints > 21) || ((playerPoints < computerPoints) && (computerPoints < 21)) ) {
                mensaje = 'The computer wins. Better luck next time!';
            } else {
                mensaje = `You've won the game! Congratulations!!!`;
            }
            alert( mensaje );
        }, 100);
    }

    const computerTurn = ( ) => {
        let computerPoints = 0;
        do {
            const card = askForCard();
            computerPoints = accumulatePoints( playersPoints.length - 1, card );
            createCard( playersPoints.length - 1, card );
        } while ( (computerPoints < playersPoints[0]) && (playersPoints[0] <= 21) );

        determineWinner();
    }


    // Events:
    btnAskForCard.addEventListener('click', () => {
        const card = askForCard();
        const playerPoints = accumulatePoints( 0, card );
        createCard( 0, card );

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

    btnNewGame.addEventListener('click', () => {
        initGame();
    });

    return {
        newGame: initGame
    };
})();