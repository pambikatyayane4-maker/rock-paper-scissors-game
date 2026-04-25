let userScore=0;
let computerScore=0

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscrorepara=document.querySelector("#User-score");
const compscorepara=document.querySelector("#computer-score");

const genComputerChoice= () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw..")
    msg.innerText="game was draw.."
    msg.style.backgroundColor="black";
    msg.style.color="white";
    
}

const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++
        userscrorepara.innerText=userScore;
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        computerScore++
        compscorepara.innerText=computerScore;
        msg.innerText = `you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }

}

const playgame=(userChoice)=>{
    console.log("usergame = ",userChoice); 
    const compChoice=genComputerChoice();
    console.log("computerGame = ", compChoice);
    if(userChoice === compChoice) {
        // game should draw
        drawGame()
    }else{
    let userWin = true;
        if(userChoice === "rock"){
             userWin=compChoice === "paper"  ? false:true;

        }else if(userChoice ==="paper") {
            userWin=compChoice ==="scissors" ? false:true;
        }else{
            userWin=compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice)=>{
    
    const Userchoice=choice.getAttribute("id");
    choice.addEventListener("click", () => {
    
        playgame(Userchoice);
    })
})