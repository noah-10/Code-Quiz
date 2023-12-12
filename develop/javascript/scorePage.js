var questionSect = document.querySelector("#question-section");

var viewHighScores = document.querySelector("#high-score");

var mainContainer = document.querySelector("#container");

var scoreContent = document.createElement("section");
scoreContent.id = "score-section";

var goBack = document.createElement("button")
    goBack.textContent = "Go Back";
    goBack.setAttribute("style", "margin-top:1rem; margin-bottom:1rem");

var removeButn = document.createElement("button")    

var allDone = document.createElement("h1");
allDone.id = "score-header";
allDone.textContent = "ALL DONE!";

var sayScore = document.createElement("p");
sayScore.setAttribute("style", "font-size: 1.5rem");

var numerOfCorrect = document.createElement("p");
numerOfCorrect.setAttribute("style", "font-size: 1.5rem");

var initialsForm = document.createElement("form");
initialsForm.id = "initials-form";
initialsForm.setAttribute("method", "post");
initialsForm.setAttribute("style", "font-size: 1.3rem");

var initialsLabel = document.createElement("label");
initialsLabel.id = "initials-label";
initialsLabel.setAttribute("for", "initials-value");
initialsLabel.innerHTML = "Please enter your initials: ";

var enterInitials = document.createElement("input");
enterInitials.id = "initials-value";
enterInitials.setAttribute("type", "text");
enterInitials.setAttribute("style", "margin-left: 0.3rem; font-size: 1.3rem");

var submitInitials = document.createElement("input");
submitInitials.setAttribute("type", "submit");
submitInitials.setAttribute("style", "display: block; margin: 1rem auto; width: 30%; background-color: var(--header); color: var(--header-font);padding: 1rem; border-radius: 15px; font-size: large");
submitInitials.id = "inital-submit";

var highScoreSect = document.createElement("section");
var highScoreHeader = document.createElement("h1");
highScoreHeader.textContent = "High Scores"

userScore = {
    initials: [],
    score: []
}


initialsForm.addEventListener("submit", function(event){
    event.preventDefault();

    if (enterInitials === ""){
        return;
    };

    userScore.initials.push(enterInitials.value.trim());
    userScore.score.push(newScore);

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
    
    sayScore.textContent = "Your final score is " + newScore + "!";
    numerOfCorrect.textContent = "You got " + amountCorrect + " out of 5 correct!";
}

function storeScores(){
    localStorage.setItem("score", JSON.stringify(userScore.score));
    localStorage.setItem("initials", JSON.stringify(userScore.initials));
}

function init(){
    var storedScores = JSON.parse(localStorage.getItem("score"));
    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    if (storedInitials !== null && storedScores !== null){
        userScore.initials = storedInitials;
        userScore.score = storedScores;
    }

}

function highScores(){
    mainPage.setAttribute("style", "display: none");
    scoreContent.remove();
    // questionSect.setAttribute("style", "display: none");
    timeElement.remove();

    document.querySelector("#container").appendChild(highScoreSect)
    highScoreSect.appendChild(highScoreHeader)

    removeButn.textContent = "Reset high scores";

    leaderboardSect = document.createElement("section");
    leaderboardSect.setAttribute("style", "display: flex; flex-direction: row; margin: 2rem auto; justify-content: center; background-color: var(--header); border-radius: 15px; width:65%");
    highScoreSect.appendChild(leaderboardSect);

    scoreLeaderboard = document.createElement("table");
    scoreLeaderboard.id = "table";

    leaderboardSect.appendChild(scoreLeaderboard);

    highScoreSect.appendChild(goBack);
    highScoreSect.appendChild(removeButn);

    scoreLeaderboard.setAttribute("style", "width:65%; font-weight: bold; font-size: 1.5rem");

    

    var scoreData = [];
    for (var i = 0; i < userScore.score.length; i++) {
        scoreData.push({ score: userScore.score[i], initials: userScore.initials[i] });
    }

    console.log(scoreData);
    scoreData.sort(function (a, b) {
        return b.score - a.score;
    });

    for (var i = 0; i < scoreData.length; i++) {
        var indivScore = scoreData[i].score;
        var indivInitial = scoreData[i].initials;

        var row = document.createElement("tr");
        var dataOne = document.createElement("td");
        var dataTwo = document.createElement("td");

        scoreLeaderboard.appendChild(row);
        row.appendChild(dataOne);
        row.appendChild(dataTwo);

        dataOne.textContent = indivScore;
        dataTwo.textContent = indivInitial;
    }

    allData = document.querySelectorAll("td");

    for (var i = 0; i < allData.length; i++){
        allData[i].setAttribute("style", "color: var(--header-font); padding: 1rem 0");
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