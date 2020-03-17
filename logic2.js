var myTimer;
var score = 0;
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-page");
var answers = document.querySelectorAll("#answers");
var allCorrects = document.querySelectorAll("#correct");
var allQuestions = document.querySelectorAll(".question");


var questionsArr = [
    {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }, {
        questionText: "test",
        answerOptions: { optionA: "test", optionB: "test2", optionC: "test3", optionD: "test4" },
        correctAnswer: "test"
    }
];





// !!***START BUTTON STARTS TIMER***!! //

function startQuiz() {
    //hide start page
    startPage.style.display = "none";
    // open first question
    allQuestions[0].style.display = "block";
    myTimer = setInterval(timer, 1000);
    //GAME TIMER
    var counter = 20;
    // COUNTER COUNTS AND LINKS TO TEXT ON PAGE
    function timer() {
        if (counter) {
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
            for (j = 0; j < allQuestions.length; j++) {
                allQuestions[j].style.display = "none";
            }

            // SEND USER TO END PAGE
            endPage.style.display = "block";


        }
    }

    questions();
}

// ! ** CHECKING INPUT FOR CORRECT ANSWERS ** ! //

// function questions() {
//     for (i = 0; i < answers.length; i++) {
//         answers[i].addEventListener("click", function (event) {
//             if (event.target.matches("button")) {
//                 console.log(event);
//                 var correctAns = document.querySelector("#correct");
//                 var wrong1 = document.querySelector("#wrong1");
//                 var wrong2 = document.querySelector("#wrong2");
//                 var wrong3 = document.querySelector("#wrong3");
//                 function wrongAns() {
//                     event.stopPropagation();
//                     nextPage();
//                 }
//                 function addPoints() {
//                     event.stopPropagation();
//                     score++;
//                     nextPage();
//                 }
//                 correctAns.addEventListener("click", addPoints);
//                 wrong1.addEventListener("click", wrongAns);
//                 wrong2.addEventListener("click", wrongAns);
//                 wrong3.addEventListener("click", wrongAns);
//             }
//         })
//     }
// }

function questions() {
    for (i = 0; i < answers.length; i++) {
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


// ! ** FUNCTION TO CYCLE QUESTION PAGES ** ! //

function nextPage() {
    // loop through question divs 
    for (var i = 0; i < allQuestions.length; i++) {

        //  if current window is visible
        if (allQuestions[i].style.display === 'block') {
            // remove it 
            allQuestions[i].style.display = "none";

            // if value of i is last element of allQuestions array
            if (i == allQuestions.length - 1) {
                clearInterval(myTimer);
                // send to end page
                endPage.style.display = "block";

            } else {
                // otherwise bring up next page
                allQuestions[i + 1].style.display = "block";

            }
            return;
        }
    }
}

// ! ** END PAGE EVENTS ** ! //

startBtn.addEventListener("click", startQuiz);




//TODO: adjust timer and score dynamically to answers


//TODO: or remove time for a wrong answer




//TODO: display score and store locally with user name


//TODO: display scores on high score page
//TODO: order scores by value!!




