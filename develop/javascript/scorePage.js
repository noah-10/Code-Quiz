var questionSect = document.querySelector("#question-section");

var viewHighScores = document.querySelector("#high-score");

var mainContainer = document.querySelector("#container");

var scoreContent = document.createElement("section");
scoreContent.id = "score-section";

var goBack = document.createElement("button")
    goBack.textContent = "Go Back";

var removeButn = document.createElement("button")    

var allDone = document.createElement("h1");
allDone.id = "score-header";
allDone.textContent = "ALL DONE!";

var sayScore = document.createElement("p");

var numerOfCorrect = document.createElement("p");

var initialsForm = document.createElement("form");
initialsForm.id = "initials-form";
initialsForm.setAttribute("method", "post");

var initialsLabel = document.createElement("label");
initialsLabel.id = "initials-label";
initialsLabel.setAttribute("for", "initials-value");
initialsLabel.innerHTML = "Please enter your initials ";

var enterInitials = document.createElement("input");
enterInitials.id = "initials-value";
enterInitials.setAttribute("type", "text");

var submitInitials = document.createElement("input");
submitInitials.setAttribute("type", "submit");
submitInitials.id = "inital-submit";

var highScoreSect = document.createElement("section");
var highScoreHeader = document.createElement("h1");
highScoreHeader.textContent = "High Scores"

var initials = [];
var score = [];

initialsForm.addEventListener("submit", function(event){
    event.preventDefault();

    if (enterInitials === ""){
        return;
    };

    initials.push(enterInitials.value.trim());
    score.push(newScore);

    storeScores();
    highScores()
});


function scorePage(){
    complete = true;
    newScore = timerCount;
    if (newScore > 0){
        newScore -= 1;
    };

    questionSect.remove();

    document.querySelector("#container").appendChild(scoreContent);
    document.querySelector("#score-section").appendChild(allDone);
    document.querySelector("#score-section").appendChild(sayScore);
    document.querySelector("#score-section").appendChild(numerOfCorrect)
    document.querySelector("#score-section").appendChild(initialsForm);
    document.querySelector("#initials-form").appendChild(initialsLabel);
    document.querySelector("#initials-form").appendChild(enterInitials);
    document.querySelector("#initials-form").appendChild(submitInitials);
    
    sayScore.textContent = "Your final score is " + newScore + " !";
    numerOfCorrect.textContent = "You got " + amountCorrect + " out of 5 correct!";
}

function storeScores(){
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));
}

function init(){
    var storedScores = JSON.parse(localStorage.getItem("score"));
    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    if (storedInitials !== null && storedScores !== null){
        initials = storedInitials;
        score = storedScores;
    }

}

function highScores(){
    mainPage.setAttribute("style", "display: none");
    scoreContent.remove()
    highScoreSect.remove();

    document.querySelector("#container").appendChild(highScoreSect)
    highScoreSect.appendChild(highScoreHeader)

    removeButn.textContent = "Reset high scores";

    leaderboard = document.createElement("ul");
    highScoreSect.appendChild(leaderboard);
    highScoreSect.appendChild(goBack);
    highScoreSect.appendChild(removeButn);

    
    for (var i = 0; i < score.length; i++){

        indivScore = score[i];
        indivInitial = initials[i];

        var li = document.createElement("li");
        li.textContent = indivInitial + " " + indivScore;

        leaderboard.appendChild(li);
    }

            
}
    

goBack.addEventListener("click", function(){
    location.reload();

});


removeButn.addEventListener("click", function(){
    localStorage.clear("score");
    localStorage.clear("initials");
    location.reload();
});

viewHighScores.addEventListener("click", highScores);

init();