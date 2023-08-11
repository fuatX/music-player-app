const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
// const audio = document.querySelector("#audio");
const singer = document.querySelector("#music-details .singer");
const title = document.querySelector("#music-details .title");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");

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
  audio.pause();
};
const playMusic = () => {
  container.classList.add("playing");
  audio.play();
};

prev.addEventListener("click", () => {
  prevMusic();
});

next.addEventListener("click", () => {
  nextMusic();
});

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
