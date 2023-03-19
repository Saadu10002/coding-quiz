var currentQuestionIndex = 0
var time = question.length * 15
var timeId;


var questionEl = document.getElementById("Questions");
var timeEl = document.getElementById("time");
var choicesEl =  document.getElementById("choices");
var submitBtn =  document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedBackEl = document.getElementById("feedback");


function sratrQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timeId = setInterval(clockTick, 1000);
    timeEl.textContent = time;
    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice,i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", "choice");

        choiceButton.textContent = i + 1 + "." + choice;
        choiceButton.onClick = questionClick;
        choicesEl.appendChild(choiceButton);
    });
}

function questionOnclick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;
        if(time < 0) {
            time = 0;
        }
        timeEl.textContent = time;

        feedBackEl.textContent = "Wrong";
    } else {
        feedBackEl.textContent = "correct";
    }
    feefBack.setAttribute("class", "feedback");

    setTimeout(function() {
        feedBackEl.setAttribute("class", "feedback hide")

    },1000);

    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    clearInterval(timeId);
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    question.setAttribute("class", "hide");

}
