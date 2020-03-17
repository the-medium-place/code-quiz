var myTimer;
var questionCounter = 0;
var score = 0;
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-page");
// var answers = document.querySelectorAll("#answers");
// var allCorrects = document.querySelectorAll("#correct");
// var allQuestions = document.querySelectorAll(".question");
var questionWindow = document.getElementById("question-window")
// var answerBtns = document.querySelectorAll(".answer-btn");
var button1 = document.querySelector("#ans1");
var button2 = document.querySelector("#ans2");
var button3 = document.querySelector("#ans3");
var button4 = document.querySelector("#ans4");
var wrongAnswer = 0;
var userScore = localStorage.getItem("userScore");
var user = localStorage.getItem("user");




var questionsArr = [
    {
        questionText: "test testing test testing",
        answerOptions: ["test", "test02", "test03", "test04"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test12", "test13", "test14"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test22", "test23", "test24"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test32", "test33", "test34"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test42", "test43", "test44"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test52", "test53", "test54"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test62", "test63", "test64"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test72", "test73", "test74"],
        correctAnswer: "test",
    }, {
        questionText: "test",
        answerOptions: ["test", "test82", "test83", "test84"],
        correctAnswer: "test",
    }
];

// LISTEN TO BUTTONS AND UPDATE SCORE
function buttonListen() {
    // event listener for answer-btn
    button1.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            displayQuestion();
        } else {
            wrongAnswer++;
            displayQuestion();
        }

    });
    button2.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            displayQuestion();
        } else {
            wrongAnswer++;
            displayQuestion();
        }

    });
    button3.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            displayQuestion();
        } else {
            wrongAnswer++;
            displayQuestion();
        }

    });
    button4.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            displayQuestion();
        } else {
            wrongAnswer++;
            displayQuestion();
        }

    });

    console.log(this);

    // if so add one point++ then displayQuestion()

    //if answer value does not equal the correct value, displayQuestion()

}


// !!***START BUTTON STARTS TIMER***!! //

function startQuiz() {

    //hide start page
    startPage.style.display = "none";

    // display question page
    questionWindow.style.display = "block";

    //start timer
    timer();
    //populate questions
    displayQuestion();
    //listen for clicks
    buttonListen();
}

// GAME TIMER
function timer() {
    myTimer = setInterval(timer, 1000);

    // !** MAIN GAME TIMER VARIABLE **! //
    var counter = 30;

    // COUNTER COUNTS AND LINKS TO TEXT ON PAGE
    function timer() {
        if(counter<0){
            counter = 0;
        } else if (counter>0) {
            document.getElementById("timer-text").innerHTML = "Time Remaining: " + counter + " sec";
            document.getElementById("score").innerHTML = "Score: " + score;
            counter--;
        } else {
            //COUNTER REACHES ZER00000000
            document.getElementById("timer-text").innerHTML = "Time Remaining: 0 sec";
            document.getElementById("final-score").innerHTML = "Score: " + score;
            clearInterval(myTimer);
            //capture User Name
            let i = 0;
            do {
                var userName = prompt("Great Job! Please enter initials:");
                if (!userName) {
                    alert("Please enter a maximum of 3 characters");
                } else if (userName.length > 3) {
                    alert("Please enter a maximum of 3 characters");
                } else {
                    document.getElementById("userName").innerHTML = "Hello " + userName;
                    i++;
                }
            } while (i < 1);

            // HIDE ALL QUESTION PAGES
            questionWindow.style.display = "none";

            // SEND USER TO END PAGE
            endPage.style.display = "block";


        }

        // REMOVE TIME FOR WRONG ANSWER
        if (wrongAnswer === 1) {
            console.log(wrongAnswer);
            counter -= 5;
            console.log(wrongAnswer);
            wrongAnswer--;
        }
    }
}

// 
function displayQuestion() {
    //target elements to update
    var title = document.querySelector("#question-title");
    var text = document.querySelector("#question-text");

    //update targets
    title.textContent = "question number " + (questionCounter + 1);
    text.textContent = questionsArr[questionCounter].questionText;

    //loop to update answer buttons
    for (i = 0; i < 4; i++) {
        //target the button
        var button = document.querySelector("#ans" + (i + 1));
        console.log("ans" + (i + 1));
        //update the text
        button.textContent = questionsArr[questionCounter].answerOptions[i];
    }

    questionCounter++;

}


// possible garbage code
function questions() {
    for (i = 1; i < answers.length; i++) {
        answers[i].addEventListener("click", function (event) {
            // event.stopPropagation();
            console.log(event.target)
            if (event.target.matches("button")) {
                // event.stopPropagation();

                // ADD TO SCORE FOR CORRECT ANSWER
                if (event.target.id = "correct") {
                    // event.stopPropagation();
                    console.log(event.target)
                    // console.log(allCorrects[i])
                    score++
                    nextPage();
                } else if (event.target.id = "wrong") {
                    // event.stopPropagation();
                    nextpage();

                };
            }
        })
    }
}

startBtn.addEventListener("click", startQuiz);











//TODO: display score and store locally with user name


//TODO: display scores on high score page
//TODO: order scores by value!!




