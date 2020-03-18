
var scoresTableEl = document.querySelector("#highscores-table");
var userValues = [JSON.parse(localStorage.getItem("userValues"))];
console.log(userValues);

userValues = [];

init();

function highScores() {
    for (let i = 0; i < userValues.length; i++) {

        //create td element for user name and user score
        var newUserTd = document.createElement("td");
        var newScoreTd = document.createElement("td");

        newUserTd.textContent = userValues[i].userName;
        newScoreTd.textContent = userValues[i].userScore;
        console.log(newUserTd, newScoreTd);
        console.log(typeof newUserTd, typeof newScoreTd);
        //insert td element to high score page
        scoresTableEl.appendChild(newUserTd);
        scoresTableEl.appendChild(newScoreTd);

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
