" use strict ";
// // let randomNumber1 = Math.floor(Math.random() * 6 + 1);
// // console.log(randomNumber1);
// Left hand side
// function diceeGame(){ 
// let randomImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
// let numberOfImages = randomImage.length;
// let randomImagePosition = Math.floor(Math.random() * numberOfImages);
// let selectedImage = randomImage[randomImagePosition];
// document.querySelector("img.img1").setAttribute("src", selectedImage);



// Right hand side
// let randomPicture = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
// let numberofPictures = randomPicture.length;
// let randomPicturePosition =  Math.floor(Math.random() * numberofPictures);
// let selectedPicture = randomPicture[randomPicturePosition]; 
// document.querySelector("img.img2").setAttribute("src", selectedPicture);


// // Changing h1 tag name
// if(selectedImage > selectedPicture){
//     document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
// } else if(selectedImage < selectedPicture){
//     document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
// } else {
//     document.querySelector("h1").innerHTML = "Draw!";
// } 


// }

// diceeGame();



// Shorter way
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomDiceeImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png// 
let randomImageSource = "images/" + randomDiceeImage; //images/dice1.png - images/dice6.png//
let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";    
let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if(randomImageSource > randomImageSource2){
            document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
        } else if(randomImageSource < randomImageSource2){
            document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }     
      










