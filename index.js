const audio = document.querySelector("audio");
const container = document.querySelector(".container");
const audioDuration = document.querySelector(".duration");
const playButton = document.querySelector(".play-button");
let isPlaying = false;

const toggleAudio = (event) => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playButton.classList.remove("playing");
  } else {
    audio.play();
    isPlaying = true;
    playButton.classList.add("playing");
  }
};
