drumButtons = document.querySelectorAll(".drum").length;


var kick = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

for (var i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            kick.play();
            break;
        case "a":
            crash.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "l":
            tom4.play();
            break;

        default:
            console.log();
    }
}


function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout (function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}