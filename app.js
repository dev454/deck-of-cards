const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

// C - Clubs
// D - Diamonds
// H - Hearts
// S - Spades
let deckOfCards = []; 

app.get('/', (req, res) => {
  res.send(`
    Welcome to the Black-Jack API;
    Documentation:

    POST
    /new-deck
    Creates a new deck of cards. This is mandatory for a new game.
    
    GET
    /get-card
    Get a card out of the deck of card. A card is made out of two characters,
    the first is the card value and the second is the card's suit (C/D/H/S).
    e.g.: 'QH' is the queen of hearts
  `)
})

app.post('/new-deck', (req, res) => {
  deckOfCards = 
  ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',
  '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
  '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH',
  '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'];
  res.send('new deck created!');
})

const randomItem = arr => arr.splice((Math.random() * arr.length) | 0, 1);

app.get('/get-card', (req, res) => {
  let randomCard = randomItem(deckOfCards);
  res.send(randomCard);
})

// for testing purpose only
app.get('/get-current-deck', (req, res) => {
  res.send(deckOfCards)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})