function randomNum() {
  var randomNumber = (6 * Math.random()) + 1;
  randomNumber = Math.floor(randomNumber);
  return randomNumber;

}
var num1 = randomNum();
var num2 = randomNum();

if (num1 > num2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (num1 < num2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

var imgSrc = "images/dice" + num1 + ".png";
var imgSrc2 = "images/dice" + num2 + ".png";

document.querySelector("img.img1").setAttribute("src", imgSrc);

document.querySelector("img.img2").setAttribute("src", imgSrc2);
