var time;
var quizText;
var intervalId;
var correct = 0;
var incorrect = 0;
var timeUp;

var answerKey = [2, 3, 1, 0, 3, 3, 2, 1, 0, 0];

var questionAsks = [
    '<img src="assets/images/BlackMesaLandscapeOkeefe.jpg" class = "img artQuestion" alt="Black Mesa Landscape">',
    '<img src="assets/images/AbsintheDegas.jpeg" class = "img artQuestion" alt="Absinthe">',
    '<img src="assets/images/DoubtingThomasCaravaggio.jpg" class = "img artQuestion" alt="Doubting Thomas">',
    '<img src="assets/images/EiffelTowerSeurat.jpg" class = "img artQuestion" alt="Eiffel Tower">',
    '<img src="assets/images/HolophernesArtemesia.jpg" class = "img artQuestion" alt="Holophernes">',
    '<img src="assets/images/HouseOfParlimentMonet.jpg" class = "img artQuestion" alt="Parliment">',
    '<img src="assets/images/Number18Pollock.jpg" class = "img artQuestion" alt="Number 18">',
    '<img src="assets/images/OrangeYellowRothko.jpg" class = "img artQuestion" alt="Orange & Yellow">',
    '<img src="assets/images/VivaLaVidaKhalo.jpg" class = "img artQuestion" alt="Watermelons">',
    '<img src="assets/images/WheatFieldVanGogh.jpeg" class = "img artQuestion" alt="Wheat Field">',
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
    $("#timerDisplay").html(timeConverter(time));
    if (time === 0 ) {
        timeUp = true;
    }
    if(timeUp) {
        alert ("Time Up!");
        end();
    }

};

function start() {
    intervalId = setInterval(decrement, 1000);
    $("#quiz").empty();
    generateQuiz();
    time = 90;
    $("#timerDisplay").append(timeConverter(time));
    timeUp = false;
};

function end() {
    clearInterval(intervalId);
    checkAnswers();
};

function generateQuiz() {
    for (i = 0; i < questionAsks.length; i ++) {
        var qaNum = i + 1;
        var question = "<h3>Question " + qaNum + " : Who painted it?</h3>" + "<div class='imgQues' >" + questionAsks[i] + "</div>";
        var answers = []
        questionAnswers[i].forEach(function (ans) {
            answers.push("<input type='radio' value =" + parseInt(questionAnswers[i].indexOf(ans)) + " name = 'noodle"+qaNum+ "'>" + ans + "<br>")
        })
        quizText = question + "<div class = 'answer" + qaNum + "'>" + answers.join(" ") + "</div>";
        $("#quiz").append("<div class = 'question'>" + quizText + "</div>");
    };
    $("#quiz").append("<button id = 'submit'>Submit</button>");
};

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};


function checkAnswers() {
    var userSubmit = [];
    for (var i = 1; i < answerKey.length+1; i ++) {
        var chigger = $('input[name = noodle' + i + ']:checked').val();
        userSubmit.push(chigger);

        if (answerKey[i]=== userSubmit[i]) {
            correct ++;
        }
        else {
            incorrect ++;
        }
    }

};
