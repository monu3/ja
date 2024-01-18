"use strick";

// here both are work as same queryselector and getelement to access the html element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); // it is faster then queryselector
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score, currentScore, activePlayer, playing;

const init = function () {
  //sarting conditions
  //current score
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; // to exit from the game when player is win

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//rolling dice functionally
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1.Generate the random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3.checked for rolled 1
    if (dice !== 1) {
      //add dice to current score
      //currentScore+=dice;
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0El.textContent = currentScore; //store the score
    } else {
      //swithch to next player
      //document.getElementById(`current--${activePlayer}`).textContent =
      // currentScore;
      // currentScore = 0;
      // activePlayer = (activePlayer === 0) ? 1 : 0;
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] = score[activePlayer] + currentScore;
    //score[0] = score[0] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //switching the player
    // `current${activePlayer}El`.textContent = 0;
    // currentScore = 0;
    // activePlayer = (activePlayer === 0) ? 1 : 0;
    // player0El.classList.toggle("player--active");
    // player1El.classList.toggle("player--active");
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () { 

    init();
});
