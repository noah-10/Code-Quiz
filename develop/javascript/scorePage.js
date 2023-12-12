
// selecting elements
var questionSect = document.querySelector("#question-section");

var viewHighScores = document.querySelector("#high-score");

var mainContainer = document.querySelector("#container");

// creating elements
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
    
    // lets the score and timer be the same
    if (newScore > 0){
        newScore -= 1;
    };

    // removes the section for displaying all questions
    questionSect.remove();

    // appending all elements for the score page
    document.querySelector("#container").appendChild(scoreContent);
    document.querySelector("#score-section").appendChild(allDone);
    document.querySelector("#score-section").appendChild(sayScore);
    document.querySelector("#score-section").appendChild(numerOfCorrect)
    document.querySelector("#score-section").appendChild(initialsForm);
    document.querySelector("#initials-form").appendChild(initialsLabel);
    document.querySelector("#initials-form").appendChild(enterInitials);
    document.querySelector("#initials-form").appendChild(submitInitials);
    
    // text content that says your score and how many questions the user got right
    sayScore.textContent = "Your final score is " + newScore + "!";
    numerOfCorrect.textContent = "You got " + amountCorrect + " out of 5 correct!";
}

// stores the user score and initials to the local storage
function storeScores(){
    localStorage.setItem("score", JSON.stringify(userScore.score));
    localStorage.setItem("initials", JSON.stringify(userScore.initials));
}

// when the page loads it automatically recives the user scores and initials from the local storage
function init(){
    var storedScores = JSON.parse(localStorage.getItem("score"));
    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    // stores the data in local storage to the variable containing scores and initials
    if (storedInitials !== null && storedScores !== null){
        userScore.initials = storedInitials;
        userScore.score = storedScores;
    }

}

// this function displays the high score page
function highScores(){
    // removes any previous content
    mainPage.setAttribute("style", "display: none");
    scoreContent.remove();

    if(questionsShown){
        questionSect.setAttribute("style", "display: none");
    }

    timeElement.remove();

    // creating the display and text for the page, also some styling
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

    // stores the user score and initial together in an object
    var scoreData = [];
    for (var i = 0; i < userScore.score.length; i++) {
        scoreData.push({ score: userScore.score[i], initials: userScore.initials[i] });
    }

    console.log(scoreData);

    // puts the object pairs in order from greatest to smallest
    scoreData.sort(function (a, b) {
        return b.score - a.score;
    });

    // puts each pair of score and initial into a row of the table
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

    // styling the table data 
    allData = document.querySelectorAll("td");

    for (var i = 0; i < allData.length; i++){
        allData[i].setAttribute("style", "color: var(--header-font); padding: 1rem 0");
    }
        
}

// when user press goes back the page just reloads and returns to the home page
goBack.addEventListener("click", function(){
    location.reload();

});

// when reset high scores is pressed the score and initials is removed from the local storage and the page is then refreshed
removeButn.addEventListener("click", function(){
    localStorage.clear("score");
    localStorage.clear("initials");
    location.reload();
});

// if view high scores is clicked then the high scores page will be displayed
viewHighScores.addEventListener("click", highScores);

init();