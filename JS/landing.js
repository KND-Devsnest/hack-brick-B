const startGameAnchor = document.getElementById('start-game');
const handleSelect = (level) => {
    startGameAnchor.href = "./home.html?" + level;
    console.log(startGameAnchor.href);
}