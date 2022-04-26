// Getting the buttons in the HTML to move around the site
const startGameButton   = document.getElementById('startGameButton'),
      addNewWordButton  = document.getElementById('addNewWordButton'),
      saveWordButton    = document.getElementById('saveWordButton'),
      cancelButton      = document.getElementById('cancelButton'),
      newGameButton     = document.getElementById('newGameButton'),
      endGameButton     = document.getElementById('endGameButton');

// Getting the different views in the index file for this game
const indexView     = document.getElementById('indexView'),
      addWordView   = document.getElementById('addWordView'),
      gameView      = document.getElementById('gameView');
      
// Getting the game elements
const gameCanvas    = document.getElementById('gameCanvas'),
      pencil        = gameCanvas.getContext('2d'),
      wordBoard     = document.getElementById('wordBoard'),
      wrongLetters  = document.getElementById('wrongLetters'), 
      gameMessage   = document.getElementById('gameMessage');

// Creating the game word bank
let words = ['PENSAR', 'CONDUCIR', 'ESCUCHAR', 'PATENTAR', 'DIALOGAR', 'CONVIVIR', 'HABLAR'];

// Global game variables
let wordToPlay;
let attemps;
let foundLetters;
let letterBoxes;
let wrongLettersShowed;

// Listening when user press a key during the game
document.addEventListener('keyup', (e) => {
    if(currentView() === 'game-view') {
        if(keepPlaying()) {
            validateTurn(e.key.toUpperCase()); 
        }
    }
});