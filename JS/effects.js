const volumeDiv = document.querySelector(".volume");
const muteDiv = document.querySelector(".unmute");

volumeDiv.addEventListener("click", () => {
  muteDiv.classList.toggle("hidden");
  if (bgm.paused) bgm.play();
  else bgm.pause();
});

const fx = new Audio("./sounds/gameSounds/paddleHit.wav");
fx.autoplay = true;
fx.muted = true;

const brickFx = new Audio("./sounds/gameSounds/woodBrickHit.wav");
fx.autoplay = true;
fx.muted = true;

const bgm = new Audio(
  document.title == "Home"
    ? "./sounds/gameSounds/Bloom.mp3"
    : "./sounds/gameSounds/Bloom.mp3"
);
bgm.autoplay = true;
bgm.muted = true;

const playBackroundMusic = () => {
  bgm.play();
  bgm.volume = 0.2;
  bgm.muted = false;
};

const pauseBackgroundMusic = () => {
  bgm.pause();
};

const playPaddleHit = () => {
  fx.muted = false;
  fx.play();
};

const playLevelComplete = () => {
  fx.src = "./sounds/gameSounds/levelComplete.wav";
  fx.play();
};

const playLevelFail = () => {
  fx.src = "./sounds/gameSounds/levelFail.wav";
  fx.play();
};

const playPowerUp = () => {
  fx.src = "./sounds/gameSounds/powerUp.wav";
  fx.play();
};

const pressButton = () => {
  fx.src = "./sounds/uiSounds/button.mp3";
  fx.play();
};

const playBrickHit = (brickType) => {
  if(brickFx.paused) {  
    brickFx.muted = false;
    brickFx.src = brickType
    brickFx.play();
  }
}
