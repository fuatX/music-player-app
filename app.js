const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
// const audio = document.querySelector("#audio");
const singer = document.querySelector("#music-details .singer");
const title = document.querySelector("#music-details .title");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const replay = document.querySelector("#replay");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

const player = new MusicPlayer(musicList);

// let music = player.getMusic(); //const yapınca değiştirilemediği için hata veriyor.
/*
console.log(new MusicPlayer(musicList).getMusic().getName()); /// console.log(musicList[0].getName());
console.log(music.getName());
*/

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

let displayMusic = (music) => {
  title.innerHTML = music.getName();
  singer.innerHTML = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
};

play.addEventListener("click", () => {
  const isMusicPlay = container.classList.contains("playing");
  isMusicPlay ? pauseMusic() : playMusic();
});

const pauseMusic = () => {
  container.classList.remove("playing");
  play.classList = "fa-solid fa-play";
  audio.pause();
};
const playMusic = () => {
  container.classList.add("playing");
  play.classList = "fa-solid fa-pause";
  audio.play();
};

prev.addEventListener("click", () => {
  prevMusic();
});

next.addEventListener("click", () => {
  nextMusic();
});

replay.addEventListener("click", () => {
  // audio.currentTime = 0;
  if (replay.classList == "fas fa-redo-alt") {
    replay.classList = "fas fa-redo-alt fa-spin";
  } else if (replay.classList == "fas fa-redo-alt fa-spin") {
    replay.classList = "fas fa-redo-alt";
  }
});

audio.addEventListener("ended", () => {
  if (
    replay.classList.contains("fa-redo-alt") &&
    replay.classList.contains("fa-spin")
  ) {
    audio.currentTime = 0;
    playMusic();
  } else {
    nextMusic();
  }
});
/*
const replayMusic = () => {
  if (progressBar.value === progressBar.max) {
    audio.currentTime = 0; // Şarkıyı başa sar
    playMusic(); 
  }
};
*/
const prevMusic = () => {
  player.prev();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
};

const nextMusic = () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
};

const calculateTime = (totalSeconds) => {
  const minute = Math.floor(totalSeconds / 60);
  const second = Math.floor(totalSeconds % 60);
  const updatedSecond = second < 10 ? `0${second}` : `${second}`;
  const result = `${minute}:${updatedSecond}`;
  return result;
};

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculateTime(audio.duration);
  progressBar.max = Math.floor(audio.duration);
});
//duration change  // https://www.w3schools.com/tags/ref_av_dom.asp
audio.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
  currentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});

let muteState = "unmuted";

volumeBar.addEventListener("input", (soundbar) => {
  const value = soundbar.target.value;
  audio.volume = value / 100;
  // max min 0-1 https://www.w3schools.com/tags/av_prop_volume.asp
  if (audio.volume === 0) {
    volume.classList = "fa-solid fa-volume-xmark";
  } else {
    volume.classList = "fa-solid fa-volume-high";
  }
});

volume.addEventListener("click", () => {
  if (muteState === "unmuted") {
    audio.muted = true;
    muteState = "muted";
    volume.classList = "fa-solid fa-volume-xmark";
    volumeBar.value = 0;
  } else {
    audio.muted = false;
    muteState = "unmuted";
    volume.classList = "fa-solid fa-volume-high";
    volumeBar.value = 100;
  }
});
