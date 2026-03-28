const playPauseBtn = document.querySelector(".playPause");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
});
const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    cover: "Km.png",
    audio: "Km.mp3"
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    cover: "thuglife.png",
    audio: "Letsplay.mp3"
  },
    {
    title: "Song three",
    artist: "Artist Three",
    cover: "folk.png",
    audio: "tm.mp3"
  }
];

const title = document.querySelector(".song-info h2");
const artist = document.querySelector(".artist");
const cover = document.querySelector(".image-box img");
const audio = document.getElementById("audio");

let currentSong = 0;

function loadSong(index) {
  const song = songs[index];

  title.textContent = song.title;    
  artist.textContent = song.artist;   
  cover.src = song.cover;             
  audio.src = song.audio;             
}
prevBtn.addEventListener("click", () => {
  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸";
});

