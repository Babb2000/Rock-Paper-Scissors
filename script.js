//Function for computer to choose item at random
let compScore = 0;
let playerScore = 0;

function computerPlay()
{
    let items = ["Rock", "Paper", "Scissors"];
    let computerChoice = items[Math.floor(Math.random() * items.length)]; //Function to step through the array and return an item at random
    return computerChoice;
}

let compAns = computerPlay();
let playerChoice = prompt("Rock, Paper, or Scissors"); //Get the user choice for Rock Paper or Scissors


function playRound(compAns, playerChoice){
    if(compAns === "Rock" && playerChoice === "Rock" || compAns === "Paper" && playerChoice === "Paper" || compAns === "Scissors" && playerChoice === "Scissors")
    {
        return ("Tie Game");
    }
    else if(compAns === "Rock" && playerChoice === "Scissors") //Test case for Rock vs Scissors
    {
        compScore++;
        return ("Rock beats Scissors, Computer Won!");
    }
    else if(playerChoice === "Rock" && compAns === "Scissors")
    {
        playerScore++;
        return ("Rock beats Scissors, You won!");
    }
    else if (compAns === "Paper" && playerChoice === "Rock") //Test case for Paper vs Rock
    {
        compScore++;
        return ("Paper beats Rock, Computer won!");
    }
    else if(playerChoice === "Paper" && compAns === "Rock")
    {
        playerScore++;
        return ("Paper beats Rock, You won!");
    }
    else if (compAns === "Scissors" && playerChoice === "Paper") //Test case for Scissors vs Rock
    {
        compScore++;
        return ("Scissors beats Paper, Computer won");
    }
    else if(playerChoice === "Scissors" && compAns === "Paper")
    {
        playerScore++;
        return ("Scissors beats Paper, You won!");
    } 
}


   
function game(compAns, playerChoice)
{
    playRound(compAns, playerChoice); // Round 1
    
    let compAns2 = computerPlay();  //Round 2
    let playerChoice2 = prompt("Rock, Paper, or Scissors");
    playRound(compAns2, playerChoice2);
    
    let compAns3 = computerPlay();  //Round 2
    let playerChoice3 = prompt("Rock, Paper, or Scissors");
    playRound(compAns3, playerChoice3);
    
    let compAns4 = computerPlay();  //Round 2
    let playerChoice4 = prompt("Rock, Paper, or Scissors");
    playRound(compAns4, playerChoice4);
   
    let compAns5 = computerPlay();  //Round 2
    let playerChoice5 = prompt("Rock, Paper, or Scissors");
    playRound(compAns5, playerChoice5);
   
    if(compScore > playerScore)
    {
        alert(`The computer beat you with a score of ${compScore} to ${playerScore}`);

    }
    else
    {
        alert(`You beat the computer with a score of ${playerScore} to ${compScore}`);
    }
    
}

game(compAns, playerChoice);