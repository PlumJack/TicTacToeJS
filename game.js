// var hello = 'Hello World';
// document.write(hello);

var startingPlayer = 'O';
var nextMove = 'O';
var gameEnded = false;

var moves = [];

var gamesWonByO = 0;
var gamesWonByX = 0;
var gamesDrawn = 0;

function cellClicked(obj) {
    if (document.getElementById(obj.id).innerHTML.length == 0 && !gameEnded) {
        document.getElementById(obj.id).innerHTML = nextMove;
        document.getElementById(obj.id).classList.remove("colorO");
        document.getElementById(obj.id).classList.remove("colorX");
        document.getElementById(obj.id).classList.add("color"+nextMove);
        

        moves.push(obj.id);
        if(moves.length == 9){
            gameEnded = true;  
        }

        if(checkAllWinConitions(nextMove)){
            gameEnded = true;
            document.getElementById("gameStatus").innerHTML = "'" + nextMove + "'" + " WON";
            alert("'" + nextMove + "'" + " WON");
            if(nextMove == 'O'){
                gamesWonByO++;
            } else {
                gamesWonByX++;
            }
            updateStats();
        } else if (gameEnded){
            gamesDrawn++;
            document.getElementById("gameStatus").innerHTML = "DRAW";
            alert("DRAW");
            updateStats();
        }
        else {
            
            changeNextMove();
        }

    }
}

function resetBoard() {
    document.getElementById(1).innerHTML = '';
    document.getElementById(2).innerHTML = '';
    document.getElementById(3).innerHTML = '';
    document.getElementById(4).innerHTML = '';
    document.getElementById(5).innerHTML = '';
    document.getElementById(6).innerHTML = '';
    document.getElementById(7).innerHTML = '';
    document.getElementById(8).innerHTML = '';
    document.getElementById(9).innerHTML = '';
    nextMove = startingPlayer;
    gameEnded = false;
    moves = [];
    document.getElementById("gameStatus").innerHTML = '&nbsp';
}

function changeStartingPlayer(){
    if (startingPlayer == 'O') {
        startingPlayer = 'X';
    } else {
        startingPlayer = 'O';
    }
}

function changeNextMove(){
    if (nextMove == 'O') {
        nextMove = 'X';
    } else {
        nextMove = 'O';
    }
}

function undoLastMove(){
    
    if(moves.length>0 && !gameEnded){
        document.getElementById(moves.pop()).innerHTML = '';
        changeNextMove();
    }
}

function updateStats(){
        document.getElementById("statsTitle").innerHTML = "Stats";
        document.getElementById("wonByO").innerHTML = "Games won by 'O': " + gamesWonByO;
        document.getElementById("wonByX").innerHTML = "Games won by 'X': " + gamesWonByX;
        document.getElementById("drawn").innerHTML = "Games drawn: " + gamesDrawn;
}