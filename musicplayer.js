class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 0; //1.müziğe set ettim
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
  previous() {
    if (this.index != 0) {
      this.index--;
    } else {
      this.index = this.musicList.length - 1;
    }
  }
}
