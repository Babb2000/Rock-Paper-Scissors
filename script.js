let compScore = 0;
let playerScore = 0;
let playerChoice;
let optionR, optionP, optionS;
 
function computerPlay()
{
   let items = ["Rock", "Paper", "Scissors"];
   let computerChoice = items[Math.floor(Math.random() * items.length)]; //Function to step through the array and return an item at random
   return computerChoice;
}
 
let compAns = computerPlay(); //Computers Choice

let containChoice = document.getElementsByClassName('box');
let rock, paper, scissors;

for(let i = 0; i < containChoice.length; i++)
{
  rock = containChoice[0]; //Assign the first container to the variable rock
  paper = containChoice[1];
  scissors = containChoice[2];
}

rock.addEventListener("click", rockFunction);
paper.addEventListener("click", paperFunction);
scissors.addEventListener("click", scissorsFunction);


function rockFunction()
{
   let choice = "Rock";
   let compAns = computerPlay();
   playRound(compAns, choice);
   
}

function paperFunction()
{
    let choice = "Paper";
    let compAns = computerPlay();
    playRound(compAns, choice);
    
}

function scissorsFunction()
{
    let choice = "Scissors";
    let compAns = computerPlay();
    playRound(compAns, choice);
}



function playRound(compAns, playerChoice){
    if(compAns === "Rock" &&  playerChoice === "Rock" || compAns === "Paper" && playerChoice === "Paper" || compAns === "Scissors" && playerChoice === "Scissors")
    {
        document.getElementById('sec').innerHTML = "You and the Computer chose the same weapon...";
    }
    else if(compAns === "Rock" && playerChoice === "Scissors") 
    {
        compScore++;
        document.getElementById('sec').innerHTML = "Rock beats Scissors, the Computer won this one...";
        let container = document.getElementsByClassName('box2');
        container[0].innerHTML = compScore;
        if(compScore === 5)
        {
          document.getElementById('sec').innerHTML = `The computer won, with a score of ${compScore} to ${playerScore}`;
        }
    }
    else if(playerChoice === "Rock" && compAns === "Scissors")
    {
        playerScore++;
        document.getElementById('sec').innerHTML = "Rock beats Scissors, you beat the computer!";
        let container = document.getElementsByClassName('box2');
        container[1].innerHTML = playerScore;
        if(playerScore === 5)
         {
           document.getElementById('sec').innerHTML = `You won! With a score of ${playerScore} to ${compScore}`;
         }
    }
    else if (compAns === "Paper" && playerChoice === "Rock") 
    {
        compScore++;
        document.getElementById('sec').innerHTML = "Paper beats Rock, the computer won this one...";
        let container = document.getElementsByClassName('box2');
        container[0].innerHTML = compScore;
        if(compScore === 5)
        {
          document.getElementById('sec').innerHTML = `The computer won, with a score of ${compScore} to ${playerScore}`;
        }
    }
    else if(playerChoice === "Paper" && compAns === "Rock")
    {
        playerScore++;
        document.getElementById('sec').innerHTML = "Paper beats Rock, you beat the computer!";
        let container = document.getElementsByClassName('box2');
        container[1].innerHTML = playerScore;
        if(playerScore === 5)
         {
           document.getElementById('sec').innerHTML = `You won! With a score of ${playerScore} to ${compScore}`;
         }
    }
    else if (compAns === "Scissors" && playerChoice === "Paper") //Test case for Scissors vs Rock
    {
        compScore++;
        document.getElementById('sec').innerHTML = "Scissors beats Paper, the computer is taking over...";
        let container = document.getElementsByClassName('box2');
        container[0].innerHTML = compScore;
        if(compScore === 5)
         {
           document.getElementById('sec').innerHTML = `The computer won, with a score of ${compScore} to ${playerScore}`;
         }
    }
    else if(playerChoice === "Scissors" && compAns === "Paper")
    {
        playerScore++;
        document.getElementById('sec').innerHTML = "Scissors beats Paper, you beat the computer!";
        let container = document.getElementsByClassName('box2');
        container[1].innerHTML = playerScore;
        if(playerScore === 5)
        {
          document.getElementById('sec').innerHTML = `You won! With a score of ${playerScore} to ${compScore}`;
        }
    }
 }
 

