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
}