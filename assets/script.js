var highScores = document.querySelector("#high-scores")

var startPage = document.querySelector("#start-page");
var instructions = document.querySelector("#instructions");
var start = document.querySelector("#start-button");

var btnArea = document.querySelector("#btnArea");

var quizPage = document.querySelector("#quiz");
var questions = document.querySelector("#questions");

var optionButtonA = document.querySelector("#option-A");
var optionButtonB = document.querySelector("#option-B");
var optionButtonC = document.querySelector("#option-C");
var optionButtonD = document.querySelector("#option-D");

var result = document.querySelector("#result");

var submitPage = document.querySelector("#submit-page");

var pastHighScores = document.querySelector("#high-scores-list");

var timeEl = document.querySelector(".timer");
let timerInterval;
var secondsLeft = 75

function setTime() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
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

start.addEventListener("click", function() {
    startGame();
});

function startGame () {
    startPage.style.display ="none";
    quizPage.style.display = "grid";
    setTime();
    renderQuestion();
}

function renderQuestion() {
    questions.textContent = allQuestions[quizQuestionIndex].question;
    optionButtonA.textContent = allQuestions[quizQuestionIndex].options[0];
    optionButtonB.textContent = allQuestions[quizQuestionIndex].options[1];
    optionButtonC.textContent = allQuestions[quizQuestionIndex].options[2];
    optionButtonD.textContent = allQuestions[quizQuestionIndex].options[3];
}

var quizQuestionIndex = 0

btnArea.addEventListener("click", function(event){
    if(event.target.textContent === allQuestions[quizQuestionIndex].answer){
        displayAnswer()
    } else if (event.target.textContent !== allQuestions[quizQuestionIndex].answer){
            secondsLeft-=10;
            showAnswer.style.display = "block";
            result.textContent = "Wrong! Minus 10 Seconds";
    }
    quizQuestionIndex++;
 
    if(quizQuestionIndex >= 5)
    {
        displaySaveScore();
        return;
    }
    renderQuestion();
});

var showAnswer = document.querySelector("#answer")

function displayAnswer(){
    showAnswer.style.display = "block";
    result.textContent = "Correct! " + allQuestions[quizQuestionIndex].answer;
}

function displaySaveScore() {
    clearInterval(timerInterval);

    showAnswer.style.display = "none";
    quizPage.style.display = "none";
    submitPage.style.display = "block";
}

var submitBtn = document.querySelector("#submit");
var playAgain = document.querySelector("#play-again");
var clearHighScores = document.querySelector("#clear-scores");
var initialEl = document.querySelector("#initials");


submitBtn.addEventListener("click", saveScore);

function saveScore(event){
    event.preventDefault();

    if(!initialEl.value){
        alert("Please enter your initials");
        return;
    }
    var scoreInitials = {
        initials: initialEl.value,
        score: secondsLeft
    };

    localStorage.setItem("scoreInitials", JSON.stringify(scoreInitials));
    renderScore()
}

function renderScore(){
    var lastScore = localStorage.getItem("scoreInitials", JSON.parse(String));
    // JSON.parse(localStorage.getItem("scoreInitials"));
    document.querySelector("#initialsScores").textContent = lastScore
}

function clearScores() {
    localStorage.clear();

}

//delegating functio to create event listener
//

// playAgain - reset timer and question index and rund startGame()

//localStorage.clear