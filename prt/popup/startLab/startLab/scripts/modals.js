//---------------------FIRST--------------------------
/*
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
    dialogBox.showModal();
})

// "close" button closes the dialog 
closeButton.addEventListener("click", () => {
    dialogBox.close();
})
*/
//---------------------SECOND--------------------------

const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");

// "Show the dialog" button opens the dialog modally
openButton1.addEventListener("click", () => {
    dialogBoxText.innerHTML="An Apple has 95 calories"
    dialogBox.showModal();
})

openButton2.addEventListener("click", () => {
    dialogBoxText.innerHTML="An Orang has 45 calories"
    dialogBox.showModal();
})
openButton3.addEventListener("click", () => {
    dialogBoxText.innerHTML="An Bananas has 105 calories"
    dialogBox.showModal();
})

// "close" button closes the dialog 
closeButton.addEventListener("click", () => {
    dialogBox.close();
})
