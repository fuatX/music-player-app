class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Bekle dedi gitti", "FYA", "1.jpg", "1.mp3"),
  new Music("Kendime Yalan Söyledim", "FYA", "2.jpg", "2.mp3"),
  new Music("Yani Olmuyor", "FYA", "3.jpg", "3.mp3"),
  new Music("Gülpembe", "FYA", "4.jpg", "4.mp3"),
  new Music("FMA-OP", "Again", "5.jpg", "5.mp3"),
  new Music("Olduramadım", "Özkan Uğur", "6.jpg", "6.mp3"),
  new Music("Zaferlerim", "Demir Demirkıran", "7.jpg", "7.mp3"),
];
