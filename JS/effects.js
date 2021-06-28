const volumeDiv = document.querySelector(".volume");
const muteDiv = document.querySelector(".unmute");

console.log(window.localStorage.getItem('isMusicMute'))

if (window.localStorage.getItem('isMusicMute') === undefined){
  window.localStorage.setItem('isMusicMute', 0);
  console.log("FAl")
}


volumeDiv.addEventListener("click", () => {
  muteDiv.classList.toggle("hidden");
  if(window.localStorage.getItem('isMusicMute') == 1){
    //console.log("Unmuting");
    window.localStorage.setItem('isMusicMute', 0);
  }
  else {
    //console.log("Muting");
    window.localStorage.setItem('isMusicMute',1);}
  muteUnmuteBg(window.localStorage.getItem('isMusicMute'));
});

const fx = new Audio("./sounds/gameSounds/paddleHit.wav");
fx.autoplay = true;
fx.muted = true;

const brickFx = new Audio("./sounds/gameSounds/woodBrickHit.wav");
brickFx.autoplay = true;
brickFx.muted = true;

const bgm = new Audio(
  document.title == "Home"
    ? "./sounds/gameSounds/Bloom.mp3"
    : "./sounds/gameSounds/Bloom.mp3"
);
bgm.autoplay = true;

function muteUnmuteBg(state){
  console.log(state);
  bgm.muted = state == 1;

}

muteUnmuteBg(window.localStorage.getItem('isMusicMute'));

const playBackroundMusic = () => {
  bgm.play();
  bgm.volume = 0.2;
  bgm.muted = false;
};

const pauseBackgroundMusic = () => {
  bgm.pause();
  bgm.muted = true;
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
  if (brickFx.paused) {
    brickFx.muted = false;
    brickFx.src = brickType;
    brickFx.play();
  }
};
