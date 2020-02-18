var passwordEL = document.getElementById("password");
var passTest = false;
var resultsArr = [false, false, false, false];

function askUser() {
    if (document.getElementById("customCheck1").checked) {
        resultsArr[0] = true;
    }
    if (document.getElementById("customCheck2").checked) {
        resultsArr[1] = true;
    }
    if (document.getElementById("customCheck3").checked) {
        resultsArr[2] = true;
    }
    if (document.getElementById("customCheck4").checked) {
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
document.getElementById("customRange1").oninput = function(){
    document.getElementById("custom1").innerHTML = this.value;
};

document.querySelector('#generate').addEventListener("click", function (event) {
    event.preventDefault();
    resultsArr = [false, false, false, false];

    var pwLength = document.getElementById("customRange1").value;
    askUser();
    genPassword(resultsArr, pwLength);
})

document.querySelector('#copy').addEventListener("click", function (event) {
    event.preventDefault();
    passwordEL.select();
    document.execCommand("Copy");
})