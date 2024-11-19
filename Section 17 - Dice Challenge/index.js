var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;

if (p1 > p2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (p1 < p2) {
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
} else if (p1 === p2) {
    document.querySelector("h1").textContent = "Draw!";
}
    


document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");