"use strict";

function checkAllWinConitions(signToCheck) {

    return checkWinCondition(1, 2, 3, signToCheck) ||
        checkWinCondition(4, 5, 6, signToCheck) ||
        checkWinCondition(7, 8, 9, signToCheck) ||
        checkWinCondition(1, 4, 7, signToCheck) ||
        checkWinCondition(2, 5, 8, signToCheck) ||
        checkWinCondition(3, 6, 9, signToCheck) ||
        checkWinCondition(1, 5, 9, signToCheck) ||
        checkWinCondition(3, 5, 7, signToCheck);
}

function checkWinCondition(first, second, third, signToCheck) {
    return document.getElementById(first).innerHTML == signToCheck &&
        document.getElementById(second).innerHTML == signToCheck &&
        document.getElementById(third).innerHTML == signToCheck;
}
