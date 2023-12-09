var startNow = document.querySelector("#button");
var timerCount = 90;
var timeElement = document.querySelector("#timer");

function startTimer(){
    
    var timer = setInterval(function(){
        
        timerCount--;
        timeElement.textContent = timerCount;

        if(timerCount > 0 && complete === true){
            clearInterval(timer);
        }

        if(timerCount === 0){
            clearInterval(timer);
            scorePage();
        } 
        
       

    }, 1000);
    
};

function wrongAnswer(){
    if(timerCount >= 15){
        timerCount -= 15;
    }else {
        timerCount = 1;
    }
    
};

startNow.addEventListener("click", startTimer);