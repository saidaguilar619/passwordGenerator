var passwordEL = document.getElementById("password");  

document.querySelector('#generate').addEventListener("click", function(event)
{
    event.preventDefault();

    var passTest = false;
    do{
        var passLength = prompt("How many characters would you like in your password?");
        if(parseInt(passLength) < 128 && parseInt(passLength) > 7 )
        {
            passTest = true;
            if(lowCase){
                    resultsArr[0] = true;
                }
                if(upCase){
                    resultsArr[1] = true;
                }
                if(numChecked){
                    resultsArr[2] = true;
                }
                if(symbolsChecked){
                    resultsArr[3] = true;
                }
         } 
         else{
            alert("please enter a value between 8 and 128");
          }
     } while(passTest === false)

    var lowCase = confirm("Would you like lower case charaters?");
    var upCase = confirm("Would you like uppper case charaters?");
    var numChecked = confirm("Would you like to use numbers?");
    var symbolsChecked = confirm("Would you like to use symbol charaters?");
    var resultsArr = [false , false ,false ,false];

    if(lowCase){
        resultsArr[0] = true;
    }
    if(upCase){
        resultsArr[1] = true;
    }
    if(numChecked){
        resultsArr[2] = true;
    }
    if(symbolsChecked){
        resultsArr[3] = true;
    }
   
    genPassword(resultsArr, passLength);
  
});

function random(range, start){
    return String.fromCharCode(Math.floor(Math.random() * range ) + start); 
 }

function genPassword(checkArr, pwLength){
    var newPassword = ""; 
    var i = 0;
    do {
        if(checkArr[0] && i < pwLength)
        {
            newPassword = newPassword + random(26, 97);
            i++;
        }
        if(checkArr[1] && i < pwLength)
        {
            newPassword = newPassword + random(26, 65);
            i++;
        }
        if(checkArr[2] && i < pwLength)
        {
            newPassword = newPassword + random(10, 48);
            i++;
        }
        if(checkArr[3] && i < pwLength)
        {
            newPassword = newPassword + random(10, 33);
            i++;
        }
    }while(i < pwLength)
  passwordEL.textContent = newPassword;
}
document.querySelector('#copy').addEventListener("click", function(event)
{
    event.preventDefault();
    passwordEL.select();
    document.execCommand("Copy");

});

//harrisson tips
//add all of the characters from the fuctions into a string
//convert that string into an array
//use math.random in a for loop to pick random index from the array
//add each index into a string by using plus equals the randomly generated index
//print out the string aY0)wS0%sY9!aS2'mH0#
//print out the string aY0)wS0%sY9!aS2'mH0#vE3%kU1#zY8"pT6$xI7!
//nE4&rX9(fV5#eZ2*fP0'fZ5&fE5#lU0%fC7&hX7(tJ7"iT9'qJ1*uF2'pJ3)lT5&tI7$bQ7#lG9#aH5)yM8&lH4"bQ5)wC0"aR7$