// grabbing elements and setting the time count for 90
var startNow = document.querySelector("#button");
var timerCount = 90;
var timeElement = document.querySelector("#timer");

function startTimer(){
    
    // function for the timer that is displayed
    var timer = setInterval(function(){
        
        timerCount--;
        timeElement.textContent = "Time left: " + timerCount;

        // checks to see if the user finished the quiz before the time is up
        if(timerCount > 0 && complete === true){
            clearInterval(timer);
        }

        // if timer is at 0 then the score page function will start and display the score page
        if(timerCount === 0){
            clearInterval(timer);
            scorePage();
        } 
        
       

    }, 1000);
    
};

// when the user gets a question incorrect then the time count will be subtracted by 15
function wrongAnswer(){
    if(timerCount >= 15){
        timerCount -= 15;
    }else {
        timerCount = 1;
    }
    
};

// event listener to start the timer when the user starts the quiz
startNow.addEventListener("click", startTimer);