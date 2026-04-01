const playPauseBtn = document.querySelector(".playPause");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const title = document.querySelector(".song-info h2");
const artist = document.querySelector(".artist");
const cover = document.querySelector(".image-box img");
const audio = document.getElementById("audio");
const songEndTime = document.querySelector(".endTime");
const progressBar = document.querySelector(".bar");
const progressFill = document.querySelector(".fill");
const currentTimel = document.querySelector(".currentTime");
let currentSong = 0;

const songs = [
  {
    title: "Sachein theme music",
    artist: "Vijay-Genelia",
    cover: "image/Km1.png",
    audio: "audio/Km.mp3",
    endTime: "0:51"
  },
  {
    title: "Let's Play",
    artist: "Kamal Haasan",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETVPAYzt_duBAWMo3tTA85Gnuf0PVE8SE2A&s",
    audio: "audio/Letsplay.mp3",
    endTime: "2:44"
  },
  {
    title: "Folk Music",
    artist: "Artist Three",
    cover: "image/folk.png",
    audio: "audio/tm.mp3",
    endTime: "1:50"
  },
  {
    title: "Nenjame Nenjame",
    artist: "Udhayanidhi-Keerthy suresh",
    cover: "https://isaiguru.in/wp-content/uploads/2024/07/nenjamae.jpg",
    audio: "audio/njm.mp3",
    endTime: "5:15"
  }
];

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;    
  artist.textContent = song.artist; 
  songEndTime.textContent = song.endTime; 
  currentTimel.textContent = "0:00";  
  cover.src = song.cover;             
  audio.src = song.audio; 
  audio.play();            
}

loadSong(0);

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
  currentSong--;
  if (currentSong < 0) {
    
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸";
});

nextBtn.addEventListener("click", () => {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸";
});


window.addEventListener("load", () => {
  loadSong(currentSong);
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercent = (currentTime / duration) * 100;
  progressFill.style.width = progressPercent + "%";
  currentTimel.textContent = formatTime(currentTime);
});
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}
progressBar.addEventListener("click", (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});
