//jshint esversion:6
// C использованием цикла while 
// let numberOfDrumButtons = document.querySelectorAll(".drum").length;
// let i = 0;       
// while (i < numberOfDrumButtons) { 
// document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("I got clicked!");
// });
// i++;   
// }

// ИЛИ:
// С использованием цикла for
// let numberOfDrumButtons = document.querySelectorAll(".drum").length; 




// document.addEventListener("keydown", function(event){
//   console.log(event);
// });





// // DETECTING BUTTON PRESS
let buttonInnerHTML = document.querySelectorAll(".drum").length;
for (let i = 0; i < buttonInnerHTML; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});





// // DETECTING KEYBOARD PRESS
function makeSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
makeSound(key);

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");

  }, 100);
}





// let buttonInnerHTML = document.querySelectorAll(".drum").length;
// for(let i = 0; i < buttonInnerHTML; i++ ){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     let buttonInnerHTML = this.innerHTML;

//   });
// }


// function makeSound(key){
//   switch (key) {
//     case "w":
//       let tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;     
//     case "a":
//       let tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       let tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       let tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       let snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       let crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       let kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     default:
//         console.log(buttonInnerHTML);                                                               
//   }
// }


// DETECTING BUTTTON PRESS

// let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     let buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);

//   });
// }


// // DETECTING KEYBOARD PRESS
// document.addEventListener("keydown", function(event){
//   makeSound(event.key);
//   buttonAnimation(event.key);
// });


// function makeSound(key) {
//   switch (key) {
//         case "w":
//           let tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//           break;     
//         case "a":
//           let tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//           break;
//         case "s":
//           let tom3 = new Audio("sounds/tom-3.mp3");
//           tom3.play();
//           break;
//         case "d":
//           let tom4 = new Audio("sounds/tom-4.mp3");
//           tom4.play();
//           break;
//         case "j":
//           let snare = new Audio("sounds/snare.mp3");
//           snare.play();
//           break;
//         case "k":
//           let crash = new Audio("sounds/crash.mp3");
//           crash.play();
//           break;
//         case "l":
//           let kick = new Audio("sounds/kick-bass.mp3");
//           kick.play();
//           break;
//         default:
//             console.log(buttonInnerHTML);                                                               
//       }   

// }




// // Mini version of the code 
// let numberOfDrumButtons=document.querySelectorAll(".drum").length;for(let e=0;e<numberOfDrumButtons;e++)document.querySelectorAll(".drum")[e].addEventListener("click",function(){let e=this.innerHTML;makeSound(e),buttonAnimation(e)});function makeSound(e){switch(e){case"w":new Audio("sounds/tom-1.mp3").play();break;case"a":new Audio("sounds/tom-2.mp3").play();break;case"s":new Audio("sounds/tom-3.mp3").play();break;case"d":new Audio("sounds/tom-4.mp3").play();break;case"j":new Audio("sounds/snare.mp3").play();break;case"k":new Audio("sounds/crash.mp3").play();break;case"l":new Audio("sounds/kick-bass.mp3").play();break;default:console.log(buttonInnerHTML)}}function buttonAnimation(e){let n=document.querySelector("."+e);n.classList.add("pressed"),setTimeout(function(){n.classList.remove("pressed")},100)}document.addEventListener("keydown",function(e){makeSound(e.key),buttonAnimation(e.key)});