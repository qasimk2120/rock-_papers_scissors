const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

//pLAYER Choice prompt and save + coversion to uppercase function expression
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

//computer choice generator and a function expression
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW //expression before : is run if conditon is truthy
    : (cChoice === ROCK && pChoice == PAPER) || //and to the right of : is run if condition is false
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice == PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  //   if(winner === RESULT_DRAW){
  //     message = message + 'had a draw'
  //   }else if (winner ===RESULT_PLAYER_WINS){                    replaced with terinary operator below
  //     message  = message + 'won';
  //   }
  //   else{
  //     message = message + 'lost';
  //   }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  winner === RESULT_DRAW
    ? (message = message + 'had a draw')
    : winner === RESULT_PLAYER_WINS
    ? (message = message + 'won')
    : (message = message + 'lost');
  alert(message);
  gameIsRunning = false;
});

//example && practice of spread, spread alternative and functions within functions, callback functins
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function () {
  let subtract = 0;
  for (const num of arguments) {
    subtract -= num;
  }
  return subtract;
};

const showResult = (result) => {
  alert('The result is ' + result);
};
sumUp(showResult, 1, 2, 6, 7, 8 - 10, 15, 25);
sumUp(showResult, 1, 2, 6, 7, 8 - 10, 15, 25, 35, 'abcd');
console.log(subtractUp(1, 5, 15, 20));
