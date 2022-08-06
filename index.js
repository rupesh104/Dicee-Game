var randomNumber1=Math.floor((Math.random()*6)+1);

var randomNumber2=Math.floor((Math.random()*6)+1);

console.log(randomNumber1,randomNumber2);

var player1Image= "images/" + "dice" + randomNumber1 + ".png";

var player2Image= "images/" + "dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",player1Image);
document.querySelector(".img2").setAttribute("src",player2Image);


if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="🔥 Player 1 Wins!";
else if(randomNumber2>randomNumber1)
    document.querySelector("h1").textContent="Player 2 Wins! 🔥";
else
    document.querySelector("h1").textContent="Draw!";
