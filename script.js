const optionsEle = document.querySelectorAll('.controls p');
const userScoreEle = document.getElementById('userScore');
const computerScoreEle = document.getElementById('computerScore');
let userScore = 0;
let computerScore = 0;
const resultEle = document.getElementById('result');
let userRes = document.getElementById('userChoice');
let computerRes = document.getElementById('computerChoice');
optionsEle.forEach(element => {
    element.addEventListener('click', operation)

});
const array = ['rock', 'paper', 'scissor']
let turn = document.getElementById('info');
const controls = document.querySelector('.controls');
function operation(event) {
    turn.textContent = "Computer's Turn";
    controls.style.pointerEvents = 'none';
    let userChoice = event.target.id;
    // console.log(event.target.id);
    userRes.textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    // console.log(userChoice);
    let randomIndex = Math.floor(Math.random() * array.length);
    let result = "";
    resultEle.textContent="";
    computerRes.textContent="";
    resultEle.textContent = result;
    setTimeout(() => {
        turn.textContent = "Your's Turn";
        controls.style.pointerEvents = 'auto';
        let computerChoice = array[randomIndex];
        // console.log(computerChoice);
        if (userChoice === computerChoice) {
            result = "Game Draw"
        } else if (
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'rock' && computerChoice === "scissor") ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            result = "You Won";

        } else {
            result = "Computer Won"
        }
        // console.log(result);
        computerRes.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        resultEle.textContent = result;
        if (result === "You Won") {
            userScore++;
            userScoreEle.textContent = userScore.toString();
        } else if (result === 'Computer Won') {
            computerScore++;
            computerScoreEle.textContent = computerScore.toString();
        }


    }, 1000)


}
