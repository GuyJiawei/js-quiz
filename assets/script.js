var timeEl = document.querySelector(".timer");

var secondsLeft = 75

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        // if statement to decrement 15" if wrong answer
        // at 0 seconds end game
        //function to take to high scores page
    })
}

var questions = [
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