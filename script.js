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


do
{
function playRound(compAns, playerChoice){
    if(compAns === "Rock" &&  playerChoice === "Rock" || compAns === "Paper" && playerChoice === "Paper" || compAns === "Scissors" && playerChoice === "Scissors")
    {
        document.getElementById('sec').innerHTML = "Tie Game";
    }
    else if(compAns === "Rock" && playerChoice === "Scissors") 
    {
        compScore++;
        document.getElementById('sec').innerHTML = "Rock beats Scissors, Computer Won!";
        let container = document.getElementsByClassName('box2');
        container[0].innerHTML = compScore;
    }
    else if(playerChoice === "Rock" && compAns === "Scissors")
    {
        playerScore++;
        document.getElementById('sec').innerHTML = "Rock beats Scissors, You won!";
        let container = document.getElementsByClassName('box2');
        container[1].innerHTML = playerScore;
    }
    else if (compAns === "Paper" && playerChoice === "Rock") 
    {
        compScore++;
        document.getElementById('sec').innerHTML = "Paper beats Rock, Computer won!";
        let container = document.getElementsByClassName('box2');
        container[0].innerHTML = compScore;
    }
    else if(playerChoice === "Paper" && compAns === "Rock")
    {
        playerScore++;
        document.getElementById('sec').innerHTML = "Paper beats Rock, You won!";
        let container = document.getElementsByClassName('box2');
        container[1].innerHTML = playerScore;
    }
    else if (compAns === "Scissors" && playerChoice === "Paper") //Test case for Scissors vs Rock
    {
        compScore++;
        document.getElementById('sec').innerHTML = "Scissors beats Paper, Computer won";
        let container = document.getElementsByClassName('box2');
        container[0].innerHTML = compScore;
    }
    else if(playerChoice === "Scissors" && compAns === "Paper")
    {
        playerScore++;
        document.getElementById('sec').innerHTML = "Scissors beats Paper, You won!";
        let container = document.getElementsByClassName('box2');
        container[1].innerHTML = playerScore;
    }
 }

}while(compScore + playerScore <= 5);

  
 