// selecting elements
var mainPage = document.querySelector("#main-page")
var startButton = document.querySelector("#button")

// creating objects with key pairs for each question
var questionOne = {
    question:"Commonly used data types DO NOT INCLUDE:",
    options: ["String", "Alert", "Boolean", "Number"],
    answer: "Alert"
};

var questionTwo = {
    question:" The condition in an if / else statement is enclosed with _____. ",
    options: ["Quotes", "Curly brackets", "Parethesis", "Square brackets"],
    answer: "curly brackets"
};

var questionThree = {
    question:"Arrays in JavaScript can be used to store _____.",
    options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    answer: "All of the above"
};

var questionFour = {
    question:"String values must be enclosed within ___ when being assigned to variables",
    options: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    answer: "Quotes"
};

var questionFive = {
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
    answer: "Console.log"
};

// creating variables that will later be used for functionality
var elem = "";

var amountCorrect = 0;

var complete = false;

var questionsShown = false;

function startQuiz() {

    // Removes the main section from document
    mainPage.setAttribute("style", "display: none");

    // if this is true and then view high scores is clicked the question section will not be visibal
    questionsShown = true;

    // creating layout for the quiz
    questionSect = document.createElement("section");
    questionSect.id = "question-section"
    document.querySelector("#container").appendChild(questionSect);

    var question = document.createElement("h1");
    question.id = "question";
    document.querySelector("#question-section").appendChild(question);
    question.setAttribute("style", "font-size: 2.5rem;");

    var optionOne = document.createElement("p");
    optionOne.id = "option-one";
    optionOne.className = "quiz-options";
    document.querySelector("#question-section").appendChild(optionOne);


    var optionTwo = document.createElement("p");
    optionTwo.id = "option-two";
    optionTwo.className = "quiz-options";
    document.querySelector("#question-section").appendChild(optionTwo);


    var optionThree = document.createElement("p");
    optionThree.id = "option-three";
    optionThree.className = "quiz-options";
    document.querySelector("#question-section").appendChild(optionThree);


    var optionFour = document.createElement("p");
    optionFour.id = "option-four";
    optionFour.className ="quiz-options";
    document.querySelector("#question-section").appendChild(optionFour);

    var optionClass = document.querySelectorAll(".quiz-options")

    // styling for all quiz options
    for(var i = 0; i < optionClass.length; i++){
        optionClass[i].setAttribute("style", "border: var(--header) solid 1px; padding:1rem; width: 50%; margin-left: auto; margin-right: auto; color: var(--header-font); background-color: var(--header); border-radius: 15px");
    }
    

    // start the first question function
    firstJavaQuestion()

    function firstJavaQuestion(){
    // selecting each element that was created for layout and adding text to it that is from the objects created for each question
    document.querySelector("#question").textContent = questionOne.question;

    document.querySelector("#option-one").textContent = questionOne.options[0];
    document.querySelector("#option-two").textContent = questionOne.options[1];
    document.querySelector("#option-three").textContent = questionOne.options[2];
    document.querySelector("#option-four").textContent = questionOne.options[3];


    // assigning each option a value that will be checked to see if user select was correct
    optionOne.value = "String";
    optionTwo.value = "Alert";
    optionThree.value = "Boolean";
    optionFour.value = "Number";

    // when user picks option, it starts the function to check if answer was correct
    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    // also when user picks a option, it will start the next question
    optionOne.addEventListener("click", secondJavaQuestion);
    optionTwo.addEventListener("click", secondJavaQuestion);
    optionThree.addEventListener("click", secondJavaQuestion);
    optionFour.addEventListener("click", secondJavaQuestion);
    }

    function secondJavaQuestion(){
    // changing each element so it is all relevent to the current question and assigning values
    document.querySelector("#question").textContent = questionTwo.question;

    document.querySelector("#option-one").textContent = questionTwo.options[0];
    optionOne.value = "Quotes";

    document.querySelector("#option-two").textContent = questionTwo.options[1];
    optionTwo.value = "curly brackets";

    document.querySelector("#option-three").textContent = questionTwo.options[2];
    optionThree.value = "Parenthesis";

    document.querySelector("#option-four").textContent = questionTwo.options[3];
    optionFour.value = "Square brackets"

    // when user picks option, it starts the function to check if answer was correct
    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    // also when user picks a option, it will start the next question
    optionOne.addEventListener("click", thirdJavaQuestion);
    optionTwo.addEventListener("click", thirdJavaQuestion);
    optionThree.addEventListener("click", thirdJavaQuestion);
    optionFour.addEventListener("click", thirdJavaQuestion);
    }

    function thirdJavaQuestion(){
    // changing each element so it is all relevent to the current question and assigning values
    document.querySelector("#question").textContent = questionThree.question;

    document.querySelector("#option-one").textContent = questionThree.options[0];
    optionOne.value = "Number and strings";

    document.querySelector("#option-two").textContent = questionThree.options[1];
    optionTwo.value = "Other arrays";

    document.querySelector("#option-three").textContent = questionThree.options[2];
    optionThree.value = "Booleans";

    document.querySelector("#option-four").textContent = questionThree.options[3];
    optionFour.value = "All of the above";

    // when user picks option, it starts the function to check if answer was correct
    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    // also when user picks a option, it will start the next question
    optionOne.addEventListener("click", fourthJavaQuestion);
    optionTwo.addEventListener("click", fourthJavaQuestion);
    optionThree.addEventListener("click", fourthJavaQuestion);
    optionFour.addEventListener("click", fourthJavaQuestion);
    }

    function fourthJavaQuestion(){
    // changing each element so it is all relevent to the current question and assigning values
    document.querySelector("#question").textContent = questionFour.question;

    document.querySelector("#option-one").textContent = questionFour.options[0];
    optionOne.value = "Commas";

    document.querySelector("#option-two").textContent = questionFour.options[1];
    optionTwo.value = "Curly brackets";

    document.querySelector("#option-three").textContent = questionFour.options[2];
    optionThree.value = "Quotes";

    document.querySelector("#option-four").textContent = questionFour.options[3];
    optionFour.value = "Parenthesis";

    // when user picks option, it starts the function to check if answer was correct
    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    // also when user picks a option, it will start the next question
    optionOne.addEventListener("click", fifthJavaQuestion);
    optionTwo.addEventListener("click", fifthJavaQuestion);
    optionThree.addEventListener("click", fifthJavaQuestion);
    optionFour.addEventListener("click", fifthJavaQuestion);
    }

    function fifthJavaQuestion(){
    // changing each element so it is all relevent to the current question and assigning values
    document.querySelector("#question").textContent = questionFive.question;

    document.querySelector("#option-one").textContent = questionFive.options[0];
    optionOne.value = "JavaScript";

    document.querySelector("#option-two").textContent = questionFive.options[1];
    optionTwo.value = "Terminal/bash";

    document.querySelector("#option-three").textContent = questionFive.options[2];
    optionThree.value = "For loops";

    document.querySelector("#option-four").textContent = questionFive.options[3];
    optionFour.value = "Console.log";

    // when user picks option, it starts the function to check if answer was correct
    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    // also when user picks a option, it will start the next question
    optionOne.addEventListener("click", scorePage);
    optionTwo.addEventListener("click", scorePage);
    optionThree.addEventListener("click", scorePage);
    optionFour.addEventListener("click", scorePage);
    }

}

// checks the value of the option the user picked and compares it with the answer key pair in the objects
function getAnswer(event){
    elem = event.target.value;
    // if right it will add 1 to the amount correct that will be displayed at the end as "amountCorrect/5"
    if(questionOne.answer == elem  || questionTwo.answer == elem || questionThree.answer == elem || questionFour.answer == elem || questionFive.answer == elem){
        amountCorrect++
    }else{
        // if wrong it will start the function wrongAnswer which will subtract time for the counter
        wrongAnswer()
    }
}

// event listener for when to start the quiz
startButton.addEventListener("click", startQuiz);