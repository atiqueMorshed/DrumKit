var t1 = new Audio("sounds/tom-1.mp3");
var t2 = new Audio("sounds/tom-2.mp3");
var t3 = new Audio("sounds/tom-3.mp3");
var t4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");

// Detecting Click
for(var i = 0; i< document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.textContent);
        animateButton(this.textContent);
    });
}

// Detecting Key
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    animateButton(event.key);
});

// Making Sound
function makeSound(aud) {
    if(aud == "w") t1.play();
    else if(aud == "a") t2.play();
    else if(aud == "s") t3.play();
    else if(aud == "d") t4.play();
    else if(aud == "j") snare.play();
    else if(aud == "k") crash.play();
    else if(aud == "l") kick.play();
}

function animateButton(key) {
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function() { document.querySelector("."+key).classList.remove("pressed")}, 700);
}
