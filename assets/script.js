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