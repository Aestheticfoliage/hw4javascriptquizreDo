var Question = document.getElementsByClassName("Question");
var answer = {} ;
var scores = "";
var finalScore = {};
var correctAnswer = "";
var incorrectAnswer = "";
// var questionVarieties = ["Experience", "Resources", "Participation", "Preferences"]


const questionArray = ["How long have you been gardening?", "Have you Saved Seeds Before?"];
console.log(Question);

 function askQuestion() {
    var Question = window.prompt(questionArray[1]);
    console.log();
}


// var correct = function() {
//     if answer
// }

askQuestion();

// function startGame() {
//     iscorrect = false;
// }