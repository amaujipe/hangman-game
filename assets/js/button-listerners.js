// Starting the game
startGameButton.addEventListener('click', () => {
    indexView.classList.toggle('invisible');
    gameView.classList.toggle('invisible');
    startNewGame();
});

// Changing index view for the add new word view
addNewWordButton.addEventListener('click', () => {
    indexView.classList.toggle('invisible');
    addWordView.classList.toggle('invisible');
});

// Getting the word the user want to add to the word bank, and starting new game
saveWordButton.addEventListener('click', (e) => {
    e.preventDefault();
    words.push(newWordTextarea.value.toUpperCase());
    addWordView.classList.toggle('invisible');
    gameView.classList.toggle('invisible');
    startNewGame();
});

// Cancel adding new word and return to index view
cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    indexView.classList.toggle('invisible');
    addWordView.classList.toggle('invisible');
});

// Starting new Game
newGameButton.addEventListener('click', () => startNewGame());

// Dismiss the game
endGameButton.addEventListener('click', () => {
    youLost('Te rendiste');
});