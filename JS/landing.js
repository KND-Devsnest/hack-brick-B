const startGameAnchor = document.getElementById('start-game');
const handleSelect = (level) => {
    startGameAnchor.href = "./home.html?" + level;
    console.log(startGameAnchor.href);
    pressButton();
}

const nameNameElement = document.getElementById('player-name');
const savePlayerName = () => {
    pressButton();
    let name = nameNameElement.value.trim();
    window.localStorage.setItem("currentPlayer", name == "" ? "Guest": name);
}