var passwordEL = document.getElementById("password");
var passTest = false;
var resultsArr = [false, false, false, false];

function checkLength() {
    do {
        var passLength = prompt("How many characters would you like in your password?");
        if (parseInt(passLength) < 128 && parseInt(passLength) > 7) {
            passTest = true;
        } else {
            alert("please enter a value between 8 and 128");
        }
    } while (passTest === false);
    return passLength;
}

function askUser() {
    var lowCase = confirm("Would you like lower case charaters?");
    var upCase = confirm("Would you like uppper case charaters?");
    var numChecked = confirm("Would you like to use numbers?");
    var symbolsChecked = confirm("Would you like to use symbol charaters?");

    if (lowCase) {
        resultsArr[0] = true;
    }
    if (upCase) {
        resultsArr[1] = true;
    }
    if (numChecked) {
        resultsArr[2] = true;
    }
    if (symbolsChecked) {
        resultsArr[3] = true;
    }
}

function random(range, start) {
    return String.fromCharCode(Math.floor(Math.random() * range) + start);
}

function genPassword(checkArr, pWordLength) {
    var newPassword = "";
    var i = 0;
    do {
        if (checkArr[0] && i < pWordLength) {
            newPassword = newPassword + random(26, 97);
            i++;
        }
        if (checkArr[1] && i < pWordLength) {
            newPassword = newPassword + random(26, 65);
            i++;
        }
        if (checkArr[2] && i < pWordLength) {
            newPassword = newPassword + random(10, 48);
            i++;
        }
        if (checkArr[3] && i < pWordLength) {
            newPassword = newPassword + random(10, 33);
            i++;
        }
    } while (i < pWordLength)
    passwordEL.textContent = newPassword;
}

document.querySelector('#generate').addEventListener("click", function (event) {
    event.preventDefault();
    resultsArr = [false, false, false, false];

    var pwLength = checkLength();
    askUser();
    genPassword(resultsArr, pwLength);
})

document.querySelector('#copy').addEventListener("click", function (event) {
    event.preventDefault();
    passwordEL.select();
    document.execCommand("Copy");
})