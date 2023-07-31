const testButton = document.getElementById("testButton");
const testText = document.getElementById("testText");
const testInput = document.getElementById("testInput");
let testList;
let testString;

const startButton = document.getElementById("startButton"); // button
const startPrompt = document.getElementById("startPrompt"); // div
const startText = document.getElementById("startText"); // text input
const test = document.getElementById("test"); // display area
const playerOneTurn = document.getElementById("playerOneTurn");
const random = document.getElementById("random");
let originalList;
let filteredList;
let promptString;

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

    // Splits user input with new lines into a list, then filters for Google Searches
    filteredList = splitLine(startText.value).filter(filterSubstring);

    // Removes the Google Search indicator for easier readability
    for (i in filteredList) {
        filteredList[i] = filteredList[i].replace(" - Google Search", "");
    }

    // Displays the list of search histories with dashes
    promptString = filteredList.join(" - ");
    test.textContent = promptString;

    // Displays a random search history entry
    listLength = filteredList.length;
    randomIndex = Math.floor(Math.random() * listLength); // getting a random array index
    random.textContent = filteredList[randomIndex];

    playerOneTurn.style.display = "block";
})

// True if string incluedes " - Google Search"
function filterSubstring(string) {
    return string.includes(" - Google Search");
}

// Returns list of strings separated by new lines
function splitLine(string) {
    return string.split("\n");
}
