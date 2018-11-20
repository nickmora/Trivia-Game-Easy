var time;
var quizText;
var intervalId;
var correct = 0;
var incorrect = 0;
var timeUp;

var quizEverything = [{   
        painting: '<img src="assets/images/BlackMesaLandscapeOkeefe.jpg" class = "img artQuestion" alt="Black Mesa Landscape">',
        answers: [
            "Pablo Picasshole",
            "Georgia O'keefe",
            "Donald Judd",
            "Leonardo",
        ],
        correctAnswer: 1,
    },
    
    {   painting: '<img src="assets/images/AbsintheDegas.jpg" class = "img artQuestion" alt="Absinthe">',
        answers: [
            "Claude Monet",
            "Edouard Manet",
            "Edgar Degas",
            "Vincent Van Gogh",
        ],
        correctAnswer: 2,
    },
    
    {   painting: '<img src="assets/images/DoubtingThomasCaravaggio.jpg" class = "img artQuestion" alt="Doubting Thomas">',
        answers: [
            "Raphael",
            "Michelangelo Merisi de Caravaggio",
            "Leonardo",
            "Jan Van Dyck",
        ],
        correctAnswer: 1,
    },

    {   painting: '<img src="assets/images/EiffelTowerSeurat.jpg" class = "img artQuestion" alt="Eiffel Tower">',
        answers: [
            "Georges Seurat",
            "Edgar Degas",
            "Claude Monet",
            "Pablo Picasshole",
        ],
        correctAnswer: 0,
    },

    {   painting: '<img src="assets/images/HolophernesArtemesia.jpg" class = "img artQuestion" alt="Holophernes">',
        answers: [
            "Michelangelo Merisi de Caravaggio",
            "Hieronymous Bosch",
            "Artemisia Gentileschi",
            "Clyfford Still",
        ],
        correctAnswer: 2,
    },

    {   painting: '<img src="assets/images/HouseOfParlimentMonet.jpg" class = "img artQuestion" alt="Parliment">',
        answers: [
            "Paul Gaugain",
            "Pierre-Auguste Renoir",
            "Paul Cezzanne",
            "Claude Monet",
        ],
        correctAnswer: 3,
    },

    {   painting: '<img src="assets/images/Number18Pollock.jpg" class = "img artQuestion" alt="Number 18">',
        answers: [
            "Jackson Pollock",
            "Louise Bourgeois",
            "Donald Judd",
            "Mark Rothko",
        ],
        correctAnswer: 0,
    },

    {   painting: '<img src="assets/images/OrangeYellowRothko.jpg" class = "img artQuestion" alt="Orange & Yellow">',
        answers: [
            "Clyfford Still",
            "Georgia O'keefe",
            "Jackson Pollock",
            "Mark Rothko",
        ],
        correctAnswer: 3,
    },

    {   painting: '<img src="assets/images/VivaLaVidaKhalo.jpg" class = "img artQuestion" alt="Watermelons">',
        answers: [
            "Diego Rivera",
            "Jeff Koons",
            "Frida Khalo",
            "Gunther Gerzso",
        ],
        correctAnswer: 2,
    },

    {   painting: '<img src="assets/images/WheatFieldVanGogh.jpeg" class = "img artQuestion" alt="Wheat Field">',
        answers: [
            "Henri Matisse",
            "Vincent Van Gogh",
            "Nick Morales",
            "Pablo Picasshole",
        ],
        correctAnswer: 1,
    },

]

$('#start').on('click', start);
$(document).on('click', '#submit', end);

function decrement() {
    time --;
    $("#timerDisplay").html("Time Left: " +timeConverter(time));
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
    $("#timerDisplay").append("Time Left: " +timeConverter(time));
    $("#timerDisplay").attr("class", "unhide timer");
    timeUp = false;
};

function end() {
    clearInterval(intervalId);
    checkAnswers();
    $("#results").attr("class", "rillrill")
    $("#results").html("<h4>You got " + correct + " correct out of 10</h4><h5>Scroll up to check your answers</h5>")
};

function generateQuiz() {
    for (i = 0; i < quizEverything.length; i ++) {
        var qaNum = i + 1;
        var question = "<h3>Question " + qaNum + " : Who painted it?</h3>" + "<div class='imgQues' >" + quizEverything[i].painting + "</div>";
        var boop = [];
        quizEverything[i].answers.forEach(function (ans) {
            boop.push("<input type='radio' value ='" + parseInt(quizEverything[i].answers.indexOf(ans)) + "'name = 'noodle"+qaNum+ "'>" + ans + "<br>")
        })
        quizText = question + "<div class = 'answer" + qaNum + "'>" + boop.join(" ") + "</div>";
        $("#quiz").append("<div class = 'question' id='strudel>"+qaNum+"'" + quizText + "</div>");
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
    for (var i = 0; i < quizEverything.length; i ++) {
        var poodle = i+1;
        var chigger = $('input[name = noodle' + poodle + ']:checked').val();
        userSubmit.push(chigger);
        console.log(chigger)

        if (quizEverything[i].correctAnswer === parseInt(userSubmit[i])) {
            correct ++;
            $('input[name=noodle'+poodle+']:checked').attr("class", "right");
        }
        else {
            incorrect ++;
            $('input[name=noodle'+poodle+']:checked').attr("class", "wrong");

        }
    }


};
