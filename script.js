const startButton = document.getElementById("startButton"); // button
const startPrompt = document.getElementById("startPrompt"); // div
const playerOnePrompts = document.getElementById("playerOnePrompts") // button
const playerTwoPrompts = document.getElementById("playerTwoPrompts") // button
const player1Input = document.getElementById("player1").value // text input
const player2input = document.getElementById("player2").value // text input

let player1History = [];
let player2History = [];

startButton.addEventListener("click", function() {
    startPrompt.innerHTML = "";

    playerOneTurn.style.display = "block";
})

playerOnePrompts.addEventListener("click", function() {
    promptList = player1Input.split("\n")
    //player1History.push(promptList);
})

playerTwoPrompts.addEventListener("click", function() {
    
})