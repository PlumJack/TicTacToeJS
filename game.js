"use strict";

const signO = 'O';
const signX = 'X';
const gameStatus = "gameStatus";

var startingPlayer = signO,
    nextMove = signO,
    gameEnded = false,
    moves = [],
    gamesWonByO = 0,
    gamesWonByX = 0,
    gamesDrawn = 0;

function cellClicked(obj) {
    if (document.getElementById(obj.id).innerHTML.length === 0 && !gameEnded) {
        
        fillFieldWithSign(obj);
        addIdToMoves(obj.id);
        gameEnded = moves.length === 9;

        if (checkAllWinConitions(nextMove)) {
            gameEnded = true;
            changeGameStatus("'" + nextMove + "'" + " WON");
            setTimeout(function(){ alert("'" + nextMove + "'" + " WON"); }, 10);
            addPointToCurrentPlayer();
            updateStats();
        } else if (gameEnded) {
            addDraw();
            changeGameStatus("DRAW");
            setTimeout(function(){ alert("DRAW"); }, 10);
            updateStats();
        }
        else {
            changeNextMove();
            changeGameStatus("'" + nextMove + "'" + " is next");
        }
    }
}

function addIdToMoves(id){
    moves.push(id);
}

function changeGameStatus(text){
    document.getElementById(gameStatus).innerHTML = text;
}

function fillFieldWithSign(obj){
    document.getElementById(obj.id).innerHTML = nextMove;
    document.getElementById(obj.id).classList.add("color" + nextMove);
}

function addPointToCurrentPlayer(){
    nextMove === signO ? gamesWonByO++ : gamesWonByX++;
}

function addDraw(){
    gamesDrawn++;
}

function resetBoard() {
    for (var i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).classList.remove("colorO");
        document.getElementById(i).classList.remove("colorX");
    }
    nextMove = startingPlayer;
    gameEnded = false;
    moves = [];
    changeGameStatus("'" + nextMove + "'" + " is next");
}

function changeStartingPlayer() {
    startingPlayer === signO ? startingPlayer = signX : startingPlayer = signO;
}

function changeNextMove() {
    nextMove === signO ? nextMove = signX : nextMove = signO;
}

function undoLastMove() {

    if (moves.length > 0 && !gameEnded) {
        var popped = document.getElementById(moves.pop());
        popped.innerHTML = '';
        popped.classList.remove("colorO");
        popped.classList.remove("colorX");
        changeNextMove();
        document.getElementById(gameStatus).innerHTML = "'" + nextMove + "'" + " is next";
    }
}

function updateStats() {
    document.getElementById("statsTitle").innerHTML = "Stats";
    document.getElementById("wonByO").innerHTML = "Games won by 'O': " + gamesWonByO;
    document.getElementById("wonByX").innerHTML = "Games won by 'X': " + gamesWonByX;
    document.getElementById("drawn").innerHTML = "Games drawn: " + gamesDrawn;
}