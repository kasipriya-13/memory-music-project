const playPauseBtn = document.querySelector(".playPause");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const title = document.querySelector(".song-info h2");
const artist = document.querySelector(".artist");
const cover = document.querySelector(".image-box img");
const audio = document.getElementById("audio");
const songEndTime = document.querySelector(".endTime");
let currentSong = 0;

const songs = [
  {
    title: "Sachein theme music",
    artist: "Artist One",
    cover: "image/Km.png",
    audio: "audio/Km.mp3",
    endTime: "0:51"
  },
  {
    title: "Thug life",
    artist: "Artist Two",
    cover: "image/thuglife.png",
    audio: "audio/Letsplay.mp3",
    endTime: "2:44"
  },
  {
    title: "Song three",
    artist: "Artist Three",
    cover: "image/folk.png",
    audio: "audio/tm.mp3",
    endTime: "1:50"
  },
  {
    title: "Song four",
    artist: "Artist Four",
    cover: "image/musicpic.png",
    audio: "audio/njm.mp3",
    endTime: "5:15"
  }
];

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
});

prevBtn.addEventListener("click", () => {
  
  if (currentSong < 0) {
    currentSong--;
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸";
});

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;    
  artist.textContent = song.artist; 
  songEndTime.textContent = song.endTime;  
  cover.src = song.cover;             
  audio.src = song.audio; 
  audio.play();            
}

loadSong(0);

