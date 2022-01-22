//Function for computer to choose item at random
function computerPlay()
{
    let items = ["Rock", "Paper", "Scissors"];
    let computerChoice = items[Math.floor(Math.random() * items.length)]; //Function to step through the array and return an item at random
    return computerChoice;
}

let compAns = computerPlay();
let playerChoice = prompt("Rock, Paper, or Scissors"); //Get the user choice for Rock Paper or Scissors

function playRound(compAns, playerChoice){
    if(compAns === "Rock" && playerChoice === "Rock" || compAns === "Paper" && playerChoice === "Paper" || compAns === "Scissors" || playerChoice === "Scissors")
    {
        console.log("Tie Game");
    }
    else if(compAns === "Rock" && playerChoice === "Scissors") //Test case for Rock vs Scissors
    {
        console.log("Rock beats Scissors, Computer Won!");
    }
    else if(playerChoice === "Rock" && compAns === "Scissors")
    {
        console.log("Rock beats Scissors, You won!");
    }
    else if (compAns === "Paper" && playerChoice === "Rock") //Test case for Paper vs Rock
    {
        console.log("Paper beats Rock, Computer won!");
    }
    else if(playerChoice === "Paper" && compAns === "Rock")
    {
        console.log("Paper beats Rock, You won!");
    }
    else if (compAns === "Scissors" && playerChoice === "Paper") //Test case for Scissors vs Rock
    {
        console.log("Scissors beats Paper, Computer won");
    }
    else if(playerChoice === "Scissors" && compAns === "Paper")
    {
        console.log("Scissors beats Paper, You won!");
    } 
}

playRound(compAns, playerChoice); //Invoke the function passing in the values for the Computer's Choice and Players Choice

