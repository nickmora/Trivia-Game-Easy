var time;
var quizText;
var intervalId;

var questionAsks = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
];

var questionAnswers = [
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
    ["a1", "a2", "a3", "a4"],
];

$('#start').on('click', start);
$("#submit").on('click', end);

function decrement() {
    time --;

};

function start() {
    intervalId = setInterval(decrement, 1000);
    $("#quiz").empty();
    generateQuiz();
    time = 90000;
    $("#timerDisplay").append("")
};

function end() {
    clearInterval(intervalId);
    checkAnswers();
}

function generateQuiz() {
    for (i = 0; i < questionAsks.length; i ++) {
        var asks = "<h3>" + questionAsks[i] + "</h3>";
        var answers = "<h4>" + questionAnswers[i] + "</h4>";
        quizText = asks + answers;
        $("#quiz").append(quizText);
    };
    $("#quiz").append("<button id = 'submit'>Submit</button>");
};