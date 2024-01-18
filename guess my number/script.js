"use strick";
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector('.message').textContent = "monu";


document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  // console.log(document.querySelector('.guess').value);   // here it is in string form ....because input taken from the user is always is in string form in js.

  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    /// blank space in input section gives the 0 value which is false ....so !guess give the true valu and provide information -->OR write true

    // document.querySelector(".message").textContent = "No NUMBER !";
    displayMessage("No NUMBER !");

    //When the player wins the game
  } else if (guess === secretnumber) {
    //document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = secretnumber;
    //Style
    document.querySelector("body").style.backgroundColor = "#60b347"; //value is always in string
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretnumber || guess < secretnumber) {
    /// if(guess!==secretnumber)
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretnumber ? " Too High!" : "Too Low!";
      displayMessage(guess > secretnumber ? " Too High!" : "Too Low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost the Game !";
      displayMessage("You lost the Game !");
      document.querySelector(".score").textContent = 0;
    }
  }
  //When the is high
  //   else if (guess > secretnumber) {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector(".message").textContent = " Too High!")
  //       );
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       console.log(
  //         (document.querySelector(".message").textContent = "You lost the Game !")
  //       );
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     //When the is low
  //   } else {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector(".message").textContent = " Too Low!")
  //       );
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       console.log(
  //         (document.querySelector(".message").textContent = "You lost the Game !")
  //       );
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

//reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".message").textContent = "Start guessing... ";
  displayMessage("Start guessing... ");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222"; //value is always in string
  document.querySelector(".number").style.width = "15rem";
});
