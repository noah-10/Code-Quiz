
var mainPage = document.querySelector("#main-page")
var startButton = document.querySelector("#button")

var questionOne = {
    question:"Commonly used data types DO NOT INClUDE:",
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
    question:"String values must be enclosed within ___ when being assigned to vairbales",
    options: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    answer: "Quotes"
};

var questionFive = {
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
    answer: "Console.log"
};

var elem = "";

var amountCorrect = 0;

var complete = false;

function startQuiz() {

    // Removes the main section from document
    mainPage.setAttribute("style", "display: none");

    questionSect = document.createElement("section");
    questionSect.id = "question-section"
    document.querySelector("#container").appendChild(questionSect);

    var question = document.createElement("h1");
    question.id = "question";
    document.querySelector("#question-section").appendChild(question);

    var optionOne = document.createElement("p");
    optionOne.id = "option-one";
    document.querySelector("#question-section").appendChild(optionOne);


    var optionTwo = document.createElement("p");
    optionTwo.id = "option-two";
    document.querySelector("#question-section").appendChild(optionTwo);


    var optionThree = document.createElement("p");
    optionThree.id = "option-three";
    document.querySelector("#question-section").appendChild(optionThree);


    var optionFour = document.createElement("p");
    optionFour.id = "option-four";
    document.querySelector("#question-section").appendChild(optionFour);

    firstJavaQuestion()

    function firstJavaQuestion(){
    document.querySelector("#question").textContent = questionOne.question;

    document.querySelector("#option-one").textContent = questionOne.options[0];
    document.querySelector("#option-two").textContent = questionOne.options[1];
    document.querySelector("#option-three").textContent = questionOne.options[2];
    document.querySelector("#option-four").textContent = questionOne.options[3];

    optionOne.value = "String";
    optionTwo.value = "Alert";
    optionThree.value = "Boolean";
    optionFour.value = "Number";

    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    optionOne.addEventListener("click", secondJavaQuestion);
    optionTwo.addEventListener("click", secondJavaQuestion);
    optionThree.addEventListener("click", secondJavaQuestion);
    optionFour.addEventListener("click", secondJavaQuestion);

    // assign each option a value and create a event target to see if that value gets clicked
    // maybe even have it include the answer propery in the variable
    }

    function secondJavaQuestion(){
    document.querySelector("#question").textContent = questionTwo.question;

    document.querySelector("#option-one").textContent = questionTwo.options[0];
    optionOne.value = "Quotes";

    document.querySelector("#option-two").textContent = questionTwo.options[1];
    optionTwo.value = "curly brackets";

    document.querySelector("#option-three").textContent = questionTwo.options[2];
    optionThree.value = "Parenthesis";

    document.querySelector("#option-four").textContent = questionTwo.options[3];
    optionFour.value = "Square brackets"

    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    optionOne.addEventListener("click", thirdJavaQuestion);
    optionTwo.addEventListener("click", thirdJavaQuestion);
    optionThree.addEventListener("click", thirdJavaQuestion);
    optionFour.addEventListener("click", thirdJavaQuestion);
    }

    function thirdJavaQuestion(){
    document.querySelector("#question").textContent = questionThree.question;

    document.querySelector("#option-one").textContent = questionThree.options[0];
    optionOne.value = "Number and strings";

    document.querySelector("#option-two").textContent = questionThree.options[1];
    optionTwo.value = "Other arrays";

    document.querySelector("#option-three").textContent = questionThree.options[2];
    optionThree.value = "Booleans";

    document.querySelector("#option-four").textContent = questionThree.options[3];
    optionFour.value = "All of the above";

    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    optionOne.addEventListener("click", fourthJavaQuestion);
    optionTwo.addEventListener("click", fourthJavaQuestion);
    optionThree.addEventListener("click", fourthJavaQuestion);
    optionFour.addEventListener("click", fourthJavaQuestion);
    }

    function fourthJavaQuestion(){
    document.querySelector("#question").textContent = questionFour.question;

    document.querySelector("#option-one").textContent = questionFour.options[0];
    optionOne.value = "Commas";

    document.querySelector("#option-two").textContent = questionFour.options[1];
    optionTwo.value = "Curly brackets";

    document.querySelector("#option-three").textContent = questionFour.options[2];
    optionThree.value = "Quotes";

    document.querySelector("#option-four").textContent = questionFour.options[3];
    optionFour.value = "Parenthesis";

    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    optionOne.addEventListener("click", fifthJavaQuestion);
    optionTwo.addEventListener("click", fifthJavaQuestion);
    optionThree.addEventListener("click", fifthJavaQuestion);
    optionFour.addEventListener("click", fifthJavaQuestion);
    }

    function fifthJavaQuestion(){
    document.querySelector("#question").textContent = questionFive.question;

    document.querySelector("#option-one").textContent = questionFive.options[0];
    optionOne.value = "JavaScript";

    document.querySelector("#option-two").textContent = questionFive.options[1];
    optionTwo.value = "Terminal/bash";

    document.querySelector("#option-three").textContent = questionFive.options[2];
    optionThree.value = "For loops";

    document.querySelector("#option-four").textContent = questionFive.options[3];
    optionFour.value = "Console.log";

    optionOne.addEventListener("click", getAnswer);
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);

    optionOne.addEventListener("click", scorePage);
    optionTwo.addEventListener("click", scorePage);
    optionThree.addEventListener("click", scorePage);
    optionFour.addEventListener("click", scorePage);
    }

}

function getAnswer(event){
    elem = event.target.value;
    if(questionOne.answer == elem  || questionTwo.answer == elem || questionThree.answer == elem || questionFour.answer == elem || questionFive.answer == elem){
        amountCorrect++
    }else{
        wrongAnswer()
    }
}




startButton.addEventListener("click", startQuiz);