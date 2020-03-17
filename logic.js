var myTimer;
var score = 0;
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-page");
var answers = document.querySelector("#answers");
var allQuestions = document.querySelectorAll(".question")


// const question of allQuestions.keys()


	for ( i=0; i<allQuestions.keys().length; i++) {
	  console.log('question: ', i);
	};



// ***** QUESTION PAGES FUNCTION ***** //

function questions() {
    // create array of question divs 
    var questionList = document.querySelectorAll("div.question");
    console.log(questionList[0].id);

    // cycle through array to show windows 
    for (let i = 0; i<questionList.length; i++){
        // if(questionsList[i] === ("q"+i))

        console.log(i);

        answers.addEventListener("click", function (event) {

            // add event delegate for buttons
            if (event.target.matches("button")) {
                console.log(event.target.querySelector(".question"));
                var quesWindow = event.target.parentElement.parentElement.parentElement.parentElement;

                // make current page disappear
                quesWindow.style.display = "none";

                // event delegate button clicks to the id="correct";
                var idEl = event.target.getAttribute("id");
                if (idEl === "correct") {

                    // if correct, add to score
                    score++;
                    console.log(event);
                    console.log(score);

                    // TODO: else subtract time
                } else {
                    console.log(event);


                }

            }

        })

    }


}


//START BUTTON STARTS TIMER
function startQuiz() {
    startPage.style.display = "none";
    document.getElementById("q0").style.display = "block";
    myTimer = setInterval(timer, 1000);
    var counter = 20;
    // COUNTER COUNTS AND LINKS TO TEXT ON PAGE
    function timer() {
        if (counter) {
            document.getElementById("timer-text").innerHTML = "Time Remaining: " + counter + " sec";
  
            counter--;
        } else {
            //COUNTER REACHES ZER00000000
            document.getElementById("timer-text").innerHTML = "Time Remaining: 0 sec";
            document.getElementById("score").innerHTML = "Score: " + score;
            console.log(score);
            clearInterval(myTimer);

            // HIDE ALL QUESTION PAGES
            for(i=0;i<allQuestions.length;i++){
                allQuestions[i].style.display = "none";
            }
            
            // SEND USER TO END PAGE
            endPage.style.display = "block";


        }
    }

    // invoke questions function to start quiz
    questions();

}





// array of all question div ids
// var queIds = ['q0', 'q1', 'q2', 'q3', 'q4'];

function next() {
    var qElems = [];
    //looping through array of question div elements
    for (var i = 0; i < allQuestions.length; i++) {
        // pushing elements of associated ids to empty array
        qElems.push(allQuestions[i]);   
    }   // same loop again??????FIXME:
    for (var i = 0; i < allQuestions.length; i++) {
        
        // **** FOR EVERY LOOP ****//
        
        //   if(current window display = "block")
        if (qElems[i].style.display === 'block') {
            // change it to 'none'
            qElems[i].style.display = "none";
            // change the 1 to a 0

            // if value of i is last element of array
            if (i == allQuestions.length - 1) {
                // send to end page
                endPage.style.display = "block";
                // change first value of 'showing' back to 1
   
            } else {
                qElems[i + 1].style.display = "block";
        
            }
            break;
        }
    }      
}

// console.log(questionList[0].id);
var testerButton = document.getElementById("testerButton");

testerButton.addEventListener("click", next);

startBtn.addEventListener("click", startQuiz); 




//TODO: adjust timer and score dynamically to answers


//TODO: or delete time for a wrong answer




//TODO: display score and store locally with user name


//TODO: display scores on high score page
//TODO: order scores by value!!




