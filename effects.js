
const fx = new Audio('./sounds/gameSounds/paddleHit.wav');
fx.autoplay = true;
fx.muted = true;

const bgm = new Audio('./sounds/gameSounds/Bloom.mp3');
bgm.autoplay = true;
bgm.muted = true;

const playBackroundMusic = () => {
    bgm.play();
    bgm.volume = 0.2;
    bgm.muted = false;
}

const pauseBackgroundMusic = () => {
    bgm.pause();
}

const playPaddleHit = () =>{
    fx.muted = false;
    fx.play();
    console.log("Playing");
}

const playLevelComplete = () => {
    fx.src = "./sounds/gameSounds/levelComplete.wav";
    fx.play();
}

const playLevelFail = () => {
    fx.src = "./sounds/gameSounds/levelFail.wav";
    fx.play();
}

const playPowerUp = () => {
    fx.src = "./sounds/gameSounds/powerUp.wav";
    fx.play();
}

const pressButton = () => {
    fx.src = "./sounds/uiSounds/button.mp3";
    fx.play();
}


