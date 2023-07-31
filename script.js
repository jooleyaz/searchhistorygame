const testButton = document.getElementById("testButton");
const testText = document.getElementById("testText");
const testInput = document.getElementById("testInput");
let testList;
let testString;

const startButton = document.getElementById("startButton"); // button
const startPrompt = document.getElementById("startPrompt"); // div
const startText = document.getElementById("startText"); // text input
const test = document.getElementById("test"); // display area
let promptList;
let promptString;
let finalPromptList;

testButton.addEventListener("click", function() {
    testList = testInput.value.split("\n");
    for (i in testList) {
        testList[i] = testList[i].replace("hi", "bye");
    }
    testString = testList.join(" - ");

    if (testText.textContent == "Not changed") {
        testText.textContent = testString;
    } else {
        testText.textContent = "Oops, you clicked again!"
    }
})

startButton.addEventListener("click", function() {
    startPrompt.innerHTML = "";

    promptList = startText.value.split("\n");
    finalPromptList = promptList.filter(filterSubstring);

    for (i in finalPromptList) {
        finalPromptList[i] = finalPromptList[i].replace(" - Google Search", "");
    }

    promptString = finalPromptList.join("... ");
    test.textContent = promptString;

    playerOneTurn.style.display = "block";
})

function filterSubstring(string) {
    return string.includes(" - Google Search");
}