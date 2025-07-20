let gamenum = 25;

let userNum=prompt("Guess the game number: ");
console.log(userNum);

while(userNum != gamenum) {
    userNum=prompt("You entered wrong number.Guess again!");
}

console.log("congratulations! ,you entered right number");