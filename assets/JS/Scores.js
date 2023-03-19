function printHighScores() {
    var highscores = Json.parse(window.localStorage.getItem("highscore")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.foreach(function(score) {
        var liTag = document. createElement("li");
        liTag.textContent = score.initials + "-" + score.score;

        var olel = document.getElementById("highscores");
        olel.appendChild(liTag);
    });

    function clearHighscores() {
        window.localStorage.removeItem("highScores");
        window.location.reload();
    }

    document.getElementById("clear").onclick = clearHighscores;

}

printHighScores();