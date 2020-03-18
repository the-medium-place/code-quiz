var scoresList = document.querySelector("#scores-list");
var initialsList = document.querySelector("#initials-list");
var scoresTableEl = document.querySelector("#highscores-table");
// var userValues = [JSON.parse(localStorage.getItem("userValues"))];
// console.log(userValues);

userValues = [];


init();
console.log(userValues[0].length);

function highScores() {
    for (let i = 0; i < userValues[0].length; i++) {

        //create td element for user name and user score
        var newUserLi = document.createElement("li");
        var newScoreLi = document.createElement("li");
        // var newTr = document.createElement("tr")
        
        newUserLi.textContent = userValues[0][i].userName;
        newScoreLi.textContent = userValues[0][i].userScore;

        console.log(newUserLi, newScoreLi);
        //insert td element to high score page
        // scoresTableEl.appendChild(newTr)
        initialsList.appendChild(newUserLi);
        scoresList.appendChild(newScoreLi);

    }

};

function init() {
    //get stored scores from localStorage
    var storedValues = JSON.parse(localStorage.getItem("userValues"));

    //if info retrieved from local, update local array
    if (storedValues !== null) {
        userValues.push(storedValues);
    }

    //render high score list
    highScores();
};
