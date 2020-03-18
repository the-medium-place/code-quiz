var myTimer;
var questionCounter = 0;
var score = 0;
var wrongAnswer = 0;

var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-page");
var questionWindow = document.getElementById("question-window")
var button1 = document.querySelector("#ans1");
var button2 = document.querySelector("#ans2");
var button3 = document.querySelector("#ans3");
var button4 = document.querySelector("#ans4");
var scoresTableEl = document.querySelector("#highscores-table");

var userNameInput = document.querySelector("#userName-input");
var userNameBtn = document.querySelector("#userName-btn");

var userValues = [];


init();


function init() {
    //get stored scores from localStorage
    var storedValues = JSON.parse(localStorage.getItem("userValues"));

    //if info retrieved from local, update local array
    if (storedValues !== null) {
        userValues.push(storedValues);
    } else {
        return;
    }   
   
};

// ARRAY OF ALL QUESTIONS 
var questionsArr = [
    {
        questionText: "Which Turtle was the leader in Blue?",
        answerOptions: ["Donatello", "Leonardo", "Michelangelo", "Raphael"],
        correctAnswer: "Leonardo",
    }, {
        questionText: "What About the \"Party Dude\" in Orange?",
        answerOptions: ["Raphael", "Donatello", "Michelangelo", "Leonardo"],
        correctAnswer: "Michelangelo",
    }, {
        questionText: "Can you name the brainiac in Purple?",
        answerOptions: ["Michelangelo", "Leonardo", "Raphael", "Donatello"],
        correctAnswer: "Donatello",
    }, {
        questionText: "Who is \"Cool but Rude\" in Red?",
        answerOptions: ["Raphael", "Michelangelo", "Donatello", "Leonardo"],
        correctAnswer: "Raphael",
    }, {
        questionText: "What was the evil gang the Turtles are always fighting?",
        answerOptions: ["The Hand", "League of Assassins", "Foot Clan", "GOP"],
        correctAnswer: "Foot Clan",
    }, {
        questionText: "Casey Jones is the Turtles' tough fightin' human friend! What kind of sports equipment does he use?",
        answerOptions: ["Football", "Hockey", "Lacrosse", "Soccer"],
        correctAnswer: "Hockey",
    }, {
        questionText: "Who are the incompetent badguy henchmen who were once human gang members?",
        answerOptions: ["Tokka and Rahzar", "Abercrombie and Finch", "Trump / Pence", "Bebop and Rocksteady"],
        correctAnswer: "Bebop and Rocksteady",
    }, {
        questionText: "Which 90's Rapper performed the best and most popular rap song ever written for a movie about teenage crime fighting turtles? (Go, Ninja, Go, Ninja, Go!",
        answerOptions: ["Vanilla Ice", "Ice Cube", "Fro-Zone", "Ice-T"],
        correctAnswer: "Vanilla Ice",
    }, {
        questionText: "What substance is responsible for the Turtles' transformation, and many others?",
        answerOptions: ["Goop", "Ooze", "Slop", "COVID-19"],
        correctAnswer: "Ooze",
    }
];

// LISTEN TO BUTTONS AND UPDATE SCORE
function buttonListen() {
    // event listener for answer-btn
    button1.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter - 1].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            console.log(userClick, typeof userClick);
            console.log(correctAns, typeof correctAns);
            score++;
            displayQuestion();
        } else {
            console.log(userClick);
            console.log(correctAns);
            wrongAnswer++;
            displayQuestion();
        }

    });
    button2.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter - 1].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            console.log(userClick);
            console.log(correctAns);
            displayQuestion();
        } else {
            wrongAnswer++;
            console.log(userClick);
            console.log(correctAns);
            displayQuestion();
        }

    });
    button3.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter - 1].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            console.log(userClick);
            console.log(correctAns);
            displayQuestion();
        } else {
            wrongAnswer++;
            console.log(userClick);
            console.log(correctAns);
            displayQuestion();
        }

    });
    button4.addEventListener("click", function () {
        var userClick = this.innerHTML;
        var correctAns = questionsArr[questionCounter - 1].correctAnswer;
        //check if answer value matches correct value
        if (userClick === correctAns) {
            score++;
            console.log(userClick);
            console.log(correctAns);
            displayQuestion();
        } else {
            wrongAnswer++;
            console.log(userClick);
            console.log(correctAns);
            displayQuestion();
        }

    });

    console.log(this);

    // if so add one point++ then displayQuestion()

    //if answer value does not equal the correct value, displayQuestion()

}


// GAME TIMER
function timer() {
    myTimer = setInterval(timer, 1000);

    // !** MAIN GAME TIMER VARIABLE **! //
    var counter = 30;

    // COUNTER COUNTS AND LINKS TO TEXT ON PAGE
    function timer() {
        if (counter < 0) {
            counter = 0;
        } else if (counter > 0) {
            document.getElementById("timer-text").innerHTML = "Time Remaining: " + counter + " sec";
            document.getElementById("score").innerHTML = "Score: " + score;
            counter--;
        } else {
            clearInterval(myTimer);

            //COUNTER REACHES ZER00000000
            document.getElementById("timer-text").innerHTML = "Time Remaining: 0 sec";
            document.getElementById("final-score").innerHTML = "Score: " + score;
            // window.location.href = "highscores.html";
            endPage.style.display = "block";


            // SAVE USER INFO AND SCORE TO LOCAL OBJECT
            var userObj = {
                userName: localStorage.getItem("userName"),
                userScore: localStorage.getItem("userScore")
            };
           
            // localStorage.setItem("userObj", userObj);



            // HIDE QUESTION PAGE
            questionWindow.style.display = "none";

            // SEND USER TO END PAGE
            endPage.style.display = "block";
            console.log(localStorage);

        }

        // REMOVE TIME FOR WRONG ANSWER
        if (wrongAnswer === 1) {
            counter -= 5;
            wrongAnswer--;
        }

    }
}

// MOVE TO NEXT QUESTION
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
        //update the text
        button.textContent = questionsArr[questionCounter].answerOptions[i];
    }

    questionCounter++;

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



////   EVENT LISTENERS     ////

//  quiz start button
startBtn.addEventListener("click", startQuiz);

//   username submit button
userNameBtn.addEventListener("click", function () {
    event.preventDefault();
   

    // save user info to object
    var userObj = ({
        userName: userNameInput.value,
        userScore: score

    });
    // push user object to userValues array
    userValues.push(userObj);

    // save userObj to localStorage
    localStorage.setItem("userValues", JSON.stringify(userObj));
   
    // escape the do loop
    i++;
    // redirect to high score page
    window.location.href = "highscores.html";


})




