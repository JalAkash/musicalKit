// Variables Initialized
var totalDrums = document.querySelectorAll(".drum").length;
var i = 0;

// Sounds on CLICK event.
while (i < totalDrums) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
  i++;
}

// Sounds on KEYPRESS event.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});


// Specific sound to play on right keyboard.
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: console.log(letter);
  }
  
}
