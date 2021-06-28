const startGameAnchor = document.getElementById('start-game');

const playerNamesDisplayItem = document.getElementById('player-names');
const playerScoresDisplayItem = document.getElementById('player-scores');

const handleSelect = (level) => {
    let scoreArray = window.localStorage.getItem("highestScore"+level);
    playerNamesDisplayItem.innerHTML = "";
    playerScoresDisplayItem.innerHTML = "";

    startGameAnchor.href = "./home.html?" + level;

    if(scoreArray == null)
        scoreArray = [{name: "N/A", score: "N/A"}]
    else
        scoreArray = JSON.parse(scoreArray);

    for(let i = 0; i < 5 && i < scoreArray.length; ++i) {
        let name = document.createElement("li"), score = document.createElement("li");
        name.innerHTML = scoreArray[i].name;
        score.innerHTML = scoreArray[i].score;
        playerNamesDisplayItem.appendChild(name);
        playerScoresDisplayItem.appendChild(score);
    }
    console.log(startGameAnchor.href);
    pressButton();
}

const nameNameElement = document.getElementById('player-name');
const savePlayerName = () => {
    pressButton();
    let name = nameNameElement.value.trim();
    window.localStorage.setItem("currentPlayer", name == "" ? "Guest": name);
}