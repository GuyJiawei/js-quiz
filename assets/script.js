// Define variables to handle sections and elements

// Variables for High Scores button and Timer element
var highScores = document.querySelector("#high-scores")
var timer = document.querySelector("#timer")

// Variables to handle Start Page container and elements within
var startPage = document.querySelector("#start-page");
var instructions = document.querySelector("#instructions");
var start = document.querySelector("#start-button");

// Variable to grab Button area for event listener delegation
var btnArea = document.querySelector("#btnArea");

// Variables for quiz page container and questions and answer elements
var quizPage = document.querySelector("#quiz");
var questions = document.querySelector("#questions");
var optionButtonA = document.querySelector("#option-A");
var optionButtonB = document.querySelector("#option-B");
var optionButtonC = document.querySelector("#option-C");
var optionButtonD = document.querySelector("#option-D");

// Variables to handle Answer and Results elements
var showAnswer = document.querySelector("#answer");
var result = document.querySelector("#result");

// Variables to handle final submit page and all elements within
var submitBtn = document.querySelector("#submit");
var playAgain = document.querySelector("#play-again");
var clearHighScores = document.querySelector("#clear-scores");
var initialEl = document.querySelector("#initials");
var submitPage = document.querySelector("#submit-page");
var clearBtn = document.querySelector("#clear-scores");
var scoreList = document.querySelector("#hi-scorers");
var playAgainBtn = document.querySelector("#play-again");
var pastHighScores = document.querySelector("#high-scores-list");

// Variables to create timer function
var timeEl = document.querySelector(".timer");
let timerInterval;
var secondsLeft = 75;

// Variable to set question index start point
var quizQuestionIndex = 0;

// Variable to pull saved scores from local storage or set empty array
var savedScores = JSON.parse(localStorage.getItem("scoreInitials")) || [];

// Variable to set all questions, options and answers in an array
var allQuestions = [
    {
        question: "1 - Commonly used data types DO NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "2 - The condition in an if/else statement is enclosed within:",
        options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses"
    },
    {
        question: "3 - Arrays can be used to store:",
        options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "4 - String values must be enclosed within ______ when being assigned to variables.",
        options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        answer: "Quotes"
    },
    {
        question: "5 - A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For loops", "Console.log"],
        answer: "Console.log"
    }
];

// Event listener to call startGame function
start.addEventListener("click", function() {
    startGame();
});

// startGame function hides startPage, displays question area, starts timer and calls renderQuestion function
function startGame () {
    startPage.style.display ="none";
    quizPage.style.display = "grid";
    highScores.style.display = "none";
    btnArea.style.display = "block";
    setTime();
    renderQuestion();
}

// Function to countdown from secondsLeft variable in increments of 1000 milliseconds
function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
}, 1000);
}

// Function to refer to current questions index and create question and answer from array
function renderQuestion() {
    questions.textContent = allQuestions[quizQuestionIndex].question;
    optionButtonA.textContent = allQuestions[quizQuestionIndex].options[0];
    optionButtonB.textContent = allQuestions[quizQuestionIndex].options[1];
    optionButtonC.textContent = allQuestions[quizQuestionIndex].options[2];
    optionButtonD.textContent = allQuestions[quizQuestionIndex].options[3];
}

// Event listener to register users answer and check against correct answer in array
btnArea.addEventListener("click", function(event){
// If statements to notify of correct answer, notify of wrong answer and decrement 10seconds
    if(event.target.textContent === allQuestions[quizQuestionIndex].answer){
        displayAnswer()
    } else if (event.target.textContent !== allQuestions[quizQuestionIndex].answer){
            secondsLeft-=10;
            showAnswer.style.display = "block";
            result.textContent = "Wrong! Minus 10 Seconds";
    } 
    // Adds 1 to index to move to next question in array
    quizQuestionIndex++;
    // If statement to end quiz when index reaches final question
    if(quizQuestionIndex >= 5)
    {
        displaySaveScore();
        return;
    } else if(secondsLeft <= 0)
    {
        displaySaveScore();
        return; 
    }
    renderQuestion();
});

// Function to display correct answer notification and answer from array
function displayAnswer(){
    showAnswer.style.display = "block";
    result.textContent = "Correct! " + allQuestions[quizQuestionIndex].answer;
};

// Function to end quiz timer, hide elements from quiz page and display final score and submit page
function displaySaveScore() {
    clearInterval(timerInterval);
    timer.style.display = "none";
    showAnswer.style.display = "none";
    quizPage.style.display = "none";
    submitPage.style.display = "block";
    pastHighScores.style.display = "block"
    pastHighScores.textContent = "Congratulations you got " + secondsLeft + "!";
};

// Event listener to submit initials, call saveScore function
submitBtn.addEventListener("click", saveScore);

// Function to detect if input has been entered, bring up alert if no value
function saveScore(event){
    event.preventDefault();
    if(!initialEl.value){
        alert("Please enter your initials");
        return;
    }
    // Set variable for local storage objects
    var scoreInitials = {
        initials: initialEl.value,
        score: secondsLeft
    };
    // Push saved objects to savedScores array
    savedScores.push(scoreInitials)
    // Save initials and score in local storage
    localStorage.setItem("scoreInitials", JSON.stringify(savedScores));
    // Call renderScore function
    renderScore()
    // Disable submit button once value entered
    document.getElementById("submit").disabled = true;
};

// Function to get objects from local storage
function renderScore(){
    var lastScore = JSON.parse(localStorage.getItem("scoreInitials"))
    // Loop to run through savedScores array and print to screen
    for (i=0; i < lastScore.length; i++){
        var hiScorers = document.querySelector("#hi-scorers");
        var scorer = document.createElement("li");
        scorer.textContent = "Initials: " + lastScore[i].initials + " " + "Score: " + lastScore[i].score;
        hiScorers.append(scorer);
    }
};

// Event listener to show saved high scores
highScores.addEventListener("click", function(event) {
    startPage.style.display = "none";
    clearBtn.style.display = "none";
    submitBtn.style.display = "none";
    playAgainBtn.style.display = "flex";
    initialEl.style.display = "none";
    submitPage.style.display = "flex";
    renderScore();
});

// Event listener to clear local storage and empty savedScores array when button pressed
clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    savedScores = [];
    scoreList.style.display = "none";
});

// Event listener to activate page reload to go back to the start of the quiz
playAgainBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.reload();
});
