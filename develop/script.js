
var startButton = document.querySelector("#button");
var headIntro = document.querySelector("#intro")
var paraIntro = document.querySelector("#intro-p")


function startQuiz() {

    // Removes the main section from document
    headIntro.remove();
    paraIntro.remove();
    startButton.remove();

    firstMultiChoice()

    function firstMultiChoice(){
        // Adds the first question
        var firstPrompt = document.createElement("h1");
        firstPrompt.id = "first-prompt";
        firstPrompt.textContent = "Commonly used data types do NOT include: ";

        var questionSect = document.createElement("section")
        questionSect.id = "question-section";

        var questionList = document.createElement("ul");

        var firstAnswer = document.createElement("li");
        firstAnswer.textContent = "1. boolean";
        firstAnswer.id = "first-option";

        var secondAnswer = document.createElement("li");
        secondAnswer.textContent = "2. number";
        secondAnswer.id = "second-option";

        var thirdAnswer = document.createElement("li");
        thirdAnswer.textContent = "3. alerts";
        thirdAnswer.id = "third-option";

        var fourthAnswer = document.createElement("li");
        fourthAnswer.textContent = "4. string";
        fourthAnswer.id = "fourth-option";



        questionList.appendChild(firstAnswer);
        questionList.appendChild(secondAnswer);
        questionList.appendChild(thirdAnswer);
        questionList.appendChild(fourthAnswer);

        questionSect.appendChild(questionList);

        document.querySelector("#container").appendChild(firstPrompt);
        document.querySelector("#container").appendChild(questionSect);

        allQuestions = document.querySelectorAll("li")
        for (i = 0; i < allQuestions.length; i++){
            allQuestions[i].setAttribute("style", "color:red; margin-bottom: 1rem; border: 1px black solid; padding-top: 1rem; padding-bottom: 1rem;");
        }

       var answerValidation = null;

       

        firstAnswer.addEventListener("click", secondMultiChoice);
        secondAnswer.addEventListener("click", secondMultiChoice);
        thirdAnswer.addEventListener("click", secondMultiChoice);
        fourthAnswer.addEventListener("click", secondMultiChoice);

        thirdAnswer.onclick = function(){
            answerValidation = true;
           }

        return answerValidation
    }

    function secondMultiChoice(){

        var remHeader = document.querySelector("#first-prompt");
        var remQuestionSection = document.querySelector("#question-section");
        remHeader.remove();
        remQuestionSection.remove();


        var previousAnswer = document.createElement("p");
        if(previousAnswer === true){
            previousAnswer.textContent = "Answer is correct!";
        } else {
            previousAnswer.textContent = "Answer was wrong!";
        };


            

        // Adds the first question
        var secondPrompt = document.createElement("h1");
        secondPrompt.textContent = "This is the second question!";
        secondPrompt.id = "second-prompt";
        

        var questionSect = document.createElement("section")
        questionSect.id = "second-question-section"

        var questionList = document.createElement("ul");

        var firstAnswer = document.createElement("li");
        firstAnswer.textContent = "This is the first answer"

        var secondAnswer = document.createElement("li");
        secondAnswer.textContent = "This is the second answer"

        var thirdAnswer = document.createElement("li");
        thirdAnswer.textContent = "This is the third Answer"

        var fourthAnswer = document.createElement("li");
        fourthAnswer.textContent = "This is the fourth Answer"

        questionList.appendChild(firstAnswer);
        questionList.appendChild(secondAnswer);
        questionList.appendChild(thirdAnswer);
        questionList.appendChild(fourthAnswer);

        questionSect.appendChild(questionList);

        document.querySelector("#container").appendChild(secondPrompt);
        document.querySelector("#container").appendChild(questionSect);
        questionSect.appendChild(previousAnswer);
        // document.querySelector("#container").appendChild(firstQuestionAnswer);

        allQuestions = document.querySelectorAll("li")
        for (i = 0; i < allQuestions.length; i++){
            allQuestions[i].setAttribute("style", "color:red; margin-bottom: 1rem; border: 1px black solid; padding-top: 1rem; padding-bottom: 1rem;");
        }

        firstAnswer.addEventListener("click", thirdMultiChoice);
        secondAnswer.addEventListener("click", thirdMultiChoice);
        thirdAnswer.addEventListener("click", thirdMultiChoice);
        fourthAnswer.addEventListener("click", thirdMultiChoice);
    }

    function thirdMultiChoice(){

        var remHeader = document.querySelector("#second-prompt");
        var remQuestionSection = document.querySelector("#second-question-section");
        remHeader.remove();
        remQuestionSection.remove();

        // Adds the first question
        var thirdPrompt = document.createElement("h1");
        thirdPrompt.textContent = "This is the third question!";
        thirdPrompt.id = "third-prompt";
        

        var questionSect = document.createElement("section")
        questionSect.id = "third-question-section"

        var questionList = document.createElement("ul");

        var firstAnswer = document.createElement("li");
        firstAnswer.textContent = "This is the first answer"

        var secondAnswer = document.createElement("li");
        secondAnswer.textContent = "This is the second answer"

        var thirdAnswer = document.createElement("li");
        thirdAnswer.textContent = "This is the third Answer"

        var fourthAnswer = document.createElement("li");
        fourthAnswer.textContent = "This is the fourth Answer"

        questionList.appendChild(firstAnswer);
        questionList.appendChild(secondAnswer);
        questionList.appendChild(thirdAnswer);
        questionList.appendChild(fourthAnswer);

        questionSect.appendChild(questionList);

        document.querySelector("#container").appendChild(thirdPrompt);
        document.querySelector("#container").appendChild(questionSect);

        allQuestions = document.querySelectorAll("li")
        for (i = 0; i < allQuestions.length; i++){
            allQuestions[i].setAttribute("style", "color:red; margin-bottom: 1rem; border: 1px black solid; padding-top: 1rem; padding-bottom: 1rem;");
        }

        firstAnswer.addEventListener("click", fourthMultiChoice);
        secondAnswer.addEventListener("click", fourthMultiChoice);
        thirdAnswer.addEventListener("click", fourthMultiChoice);
        fourthAnswer.addEventListener("click", fourthMultiChoice);
    }

    function fourthMultiChoice(){

        var remHeader = document.querySelector("#third-prompt");
        var remQuestionSection = document.querySelector("#third-question-section");
        remHeader.remove();
        remQuestionSection.remove();

        // Adds the first question
        var fourthPrompt = document.createElement("h1");
        fourthPrompt.textContent = "This is the fourth question!";
        fourthPrompt.id = "fourth-prompt";
        

        var questionSect = document.createElement("section")
        questionSect.id = "fourth-question-section"

        var questionList = document.createElement("ul");

        var firstAnswer = document.createElement("li");
        firstAnswer.textContent = "This is the first answer"

        var secondAnswer = document.createElement("li");
        secondAnswer.textContent = "This is the second answer"

        var thirdAnswer = document.createElement("li");
        thirdAnswer.textContent = "This is the third Answer"

        var fourthAnswer = document.createElement("li");
        fourthAnswer.textContent = "This is the fourth Answer"

        questionList.appendChild(firstAnswer);
        questionList.appendChild(secondAnswer);
        questionList.appendChild(thirdAnswer);
        questionList.appendChild(fourthAnswer);

        questionSect.appendChild(questionList);

        document.querySelector("#container").appendChild(fourthPrompt);
        document.querySelector("#container").appendChild(questionSect);

        allQuestions = document.querySelectorAll("li")
        for (i = 0; i < allQuestions.length; i++){
            allQuestions[i].setAttribute("style", "color:red; margin-bottom: 1rem; border: 1px black solid; padding-top: 1rem; padding-bottom: 1rem;");
        }

        firstAnswer.addEventListener("click", fifthMultiChoice);
        secondAnswer.addEventListener("click", fifthMultiChoice);
        thirdAnswer.addEventListener("click", fifthMultiChoice);
        fourthAnswer.addEventListener("click", fifthMultiChoice);
    }

    function fifthMultiChoice(){

        var remHeader = document.querySelector("#fourth-prompt");
        var remQuestionSection = document.querySelector("#fourth-question-section");
        remHeader.remove();
        remQuestionSection.remove();

        // Adds the first question
        var fifthPrompt = document.createElement("h1");
        fifthPrompt.textContent = "This is the fifth question!";
        fifthPrompt.id = "fifth-prompt";
        

        var questionSect = document.createElement("section")
        questionSect.id = "fifth-question-section"

        var questionList = document.createElement("ul");

        var firstAnswer = document.createElement("li");
        firstAnswer.textContent = "This is the first answer"

        var secondAnswer = document.createElement("li");
        secondAnswer.textContent = "This is the second answer"

        var thirdAnswer = document.createElement("li");
        thirdAnswer.textContent = "This is the third Answer"

        var fourthAnswer = document.createElement("li");
        fourthAnswer.textContent = "This is the fourth Answer"

        questionList.appendChild(firstAnswer);
        questionList.appendChild(secondAnswer);
        questionList.appendChild(thirdAnswer);
        questionList.appendChild(fourthAnswer);

        questionSect.appendChild(questionList);

        document.querySelector("#container").appendChild(fifthPrompt);
        document.querySelector("#container").appendChild(questionSect);

        allQuestions = document.querySelectorAll("li")
        for (i = 0; i < allQuestions.length; i++){
            allQuestions[i].setAttribute("style", "color:red; margin-bottom: 1rem; border: 1px black solid; padding-top: 1rem; padding-bottom: 1rem;");
        }
    }

}






startButton.addEventListener("click", startQuiz);
