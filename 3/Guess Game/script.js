"use strict";
// console.log(document.querySelector(".message"));
// document.querySelector(".message").value = 23;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
var elem = document.getElementsByClassName("check");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// Function to change Data in whole page
function changeData() {
  const guess = Number(document.querySelector(".guess").value);
  //   When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  }
  //   When player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    elem[0].removeEventListener("click", changeData);
    highScore = highScore < score ? score : highScore;
    document.querySelector(".highscore").textContent = highScore;
  }
  // When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");

      document.querySelector(".score").textContent = --score;
    } else {
      displayMessage("");
      ("💥 Sorry You lose the game!");
      document.querySelector("body").style.backgroundColor = "#B33B3B";
      document.querySelector(".score").textContent = --score;
      elem.removeEventListener("click", elemEventHandler, false);
    }
  }
}
// Adding onclick event on Again button to reset all data
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  elem[0].addEventListener("click", changeData);
});
// Setting onclick event on Check button
elem[0].addEventListener("click", changeData);
