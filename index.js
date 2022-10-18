function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}
var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

var imagePlayerOne = "images/dice" + randomNumber1 + ".png";
var imagePlayerTwo = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", imagePlayerOne);
document.querySelector(".img2").setAttribute("src", imagePlayerTwo);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 won";
} else {
  document.querySelector("h1").innerText = "Draw";
  // document.querySelector("h1").style.fontSize = "6rem"
}