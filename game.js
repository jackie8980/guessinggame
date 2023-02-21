//user input for max number
function get_number(prompt) {
    let valid_input = false;
    let max, input;
    
    while(!valid_input) {
        input = window.prompt(prompt);
        max = Number(input);
        if(max != NaN && max > 1) {
            valid_input = true;
        }
    }
    return max;
}

let instruction = document.getElementById("instruction");
let userinput = get_number("What should the maximum number be?");
let number = Number(userinput);

instruction.innerHTML = `Guess a number between 1 and ${number}`;

// load up random number on site load
let randomnumber = Math.floor(Math.random() * (number)) +1; //
console.log(randomnumber);
let guesses = [];

function userguess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");  //locate message id

    //check results
    if (guess <= 0 || guess > number) { //nummber not in range
        message.innerHTML = `That number is not in range, try again`;
    }
    else if (isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    else if (guess == randomnumber) { //correct guess
        guesses.push(guess);
        message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses}`;
    }
    else if (guesses.includes(guess)) {
        message.innerHTML = "This number has already been guessed. Try again."
    }
    else { //did not guess right
        if (guess < randomnumber) {
            guesses.push(guess);
            message.innerHTML = "No, try a higher number.";
        }
        else{
            guesses.push(guess);
            message.innerHTML = "No, try a lower number.";
        }
    }
}
