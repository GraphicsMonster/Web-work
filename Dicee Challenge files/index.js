

var score1 = Math.floor(Math.random() * (5)) + 1;
var score2 = Math.floor(Math.random() * (5)) + 1;

var image1 = "images/" + "dice" + score1 + ".png";
var image2 = "images/" + "dice" + score2 + ".png";

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.setAttribute("src", image1);
dice2.setAttribute("src", image2);

if(score1>score2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!!";
}
else if(score2>score1){
    document.querySelector("h1").innerHTML = "Player 2 wins!!!";
}
else {
    document.querySelector("h1").innerHTML = "Tie!!!";
}