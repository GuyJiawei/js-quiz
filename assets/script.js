var highScores = document.querySelector("#high-scores")

var startPage = document.querySelector("#start-page");
var instructions = document.querySelector("#instructions");
var start = document.querySelector("#start-button");

var quizPage = document.querySelector("#quiz");
var questions = document.querySelector("#questions");

var optionButtonA = document.querySelector("#option-A");
var optionButtonB = document.querySelector("#option-B");
var optionButtonC = document.querySelector("#option-C");
var optionButtonD = document.querySelector("#option-D");

var answer = document.querySelector("#answer");
var result = document.querySelector("#result");

var pastHighScores = document.querySelector("#high-scores-list");

var playAgain = document.querySelector("#play-again");
var clearHighScores = document.querySelector("#clear-scores");

var quizQuestionIndex = 0

var timeEl = document.querySelector(".timer");
var secondsLeft = 75

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}

 

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
        question: "4 - String values must be enclosed within _______ whan being assigned to variables.",
        options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        answer: "Quotes"
    },
    {
        question: "5 - A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For loops", "Console.log"],
        answer: "Console.log"
    }
];

start.addEventListener("click", function() {
    startGame();
});

function startGame () {
    startPage.style.display ="none";
    quizPage.style.display = "grid";
    setTime();
    renderQuestion(quizQuestion);
}

function renderQuestion() {
    questions.textContent = allQuestions[quizQuestionIndex].question;
    optionButtonA.textContent = allQuestions[quizQuestionIndex].options[0];
    optionButtonB.textContent = allQuestions[quizQuestionIndex].options[1];
    optionButtonC.textContent = allQuestions[quizQuestionIndex].options[2];
    optionButtonD.textContent = allQuestions[quizQuestionIndex].options[3];
}

function checkAnswer() {

}

function endGame

