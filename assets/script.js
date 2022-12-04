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

var timeEl = document.querySelector(".timer");
var secondsLeft = 75

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        // if statement to decrement 15" if wrong answer
        // at 0 seconds end game
        //function to take to high scores page
        // if (secondsLeft === 0 || )
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}

 

var allQuestions = [
    {
        question: "1 - Commonly used data types DO NOT include:",
        options: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        answer: "C"
    },
    {
        question: "2 - The condition in an if/else statement is enclosed within:",
        options: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
        answer: "C"
    },
    {
        question: "3 - Arrays can be used to store:",
        options: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
        answer: "D"
    },
    {
        question: "4 - String values must be enclosed within _______ whan being assigned to variables.",
        options: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parentheses"],
        answer: "C"
    },
    {
        question: "5 - A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["A. JavaScript", "B. Terminal/Bash", "C. For loops", "D. Console.log"],
        answer: "D"
    }
];

start.addEventListener("click", function() {
    startGame();
});

function startGame () {
    startPage.style.display ="none";
    quizPage.style.display = "grid";
    quizQuestion = 0
    setTime();
    renderQuestion(quizQuestion);
}

function renderQuestion(i) {
    questions.textContent = allQuestions[i].question;
    optionButtonA.textContent = allQuestions[i].options[0];
    optionButtonB.textContent = allQuestions[i].options[1];
    optionButtonC.textContent = allQuestions[i].options[2];
    optionButtonD.textContent = allQuestions[i].options[3];
    quizQuestion = i;
}

