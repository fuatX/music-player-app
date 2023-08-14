class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 0; //1.müziğe set ettim
    // this.lastPlayedIndex = -1;
  }

  getMusic() {
    return this.musicList[this.index];
  }

  next() {
    if (this.index + 1 < this.musicList.length) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
  /// 0 a eşit olmadığı sürece
  prev() {
    if (this.index != 0) {
      this.index--;
    } else {
      this.index = this.musicList.length - 1;
    }
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.musicList.length);
    this.index = randomIndex;
  }
}
