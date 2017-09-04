// var hello = 'Hello World2';
// document.write(hello);

function checkAllWinConitions(signToCheck) {
    if(checkWinCondition123(signToCheck)){
        return true;
    }
    if(checkWinCondition456(signToCheck)){
        return true;
    }
    if(checkWinCondition789(signToCheck)){
        return true;
    }
    if(checkWinCondition147(signToCheck)){
        return true;
    }
    if(checkWinCondition258(signToCheck)){
        return true;
    }
    if(checkWinCondition369(signToCheck)){
        return true;
    }
    if(checkWinCondition159(signToCheck)){
        return true;
    }
    if(checkWinCondition357(signToCheck)){
        return true;
    }
    return false;
}

function checkWinCondition123(signToCheck) {
    if (document.getElementById("1").innerHTML == signToCheck &&
        document.getElementById("2").innerHTML == signToCheck &&
        document.getElementById("3").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition456(signToCheck) {
    if (document.getElementById("4").innerHTML == signToCheck &&
        document.getElementById("5").innerHTML == signToCheck &&
        document.getElementById("6").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition789(signToCheck) {
    if (document.getElementById("7").innerHTML == signToCheck &&
        document.getElementById("8").innerHTML == signToCheck &&
        document.getElementById("9").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition147(signToCheck) {
    if (document.getElementById("1").innerHTML == signToCheck &&
        document.getElementById("4").innerHTML == signToCheck &&
        document.getElementById("7").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition258(signToCheck) {
    if (document.getElementById("2").innerHTML == signToCheck &&
        document.getElementById("5").innerHTML == signToCheck &&
        document.getElementById("8").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition369(signToCheck) {
    if (document.getElementById("3").innerHTML == signToCheck &&
        document.getElementById("6").innerHTML == signToCheck &&
        document.getElementById("9").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition159(signToCheck) {
    if (document.getElementById("1").innerHTML == signToCheck &&
        document.getElementById("5").innerHTML == signToCheck &&
        document.getElementById("9").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}

function checkWinCondition357(signToCheck) {
    if (document.getElementById("3").innerHTML == signToCheck &&
        document.getElementById("5").innerHTML == signToCheck &&
        document.getElementById("7").innerHTML == signToCheck) {
        return true;
    } else {
        return false;
    }
}