const playPauseBtn = document.querySelector(".playPause");

playPauseBtn.addEventListener("click", () => {
  playPauseBtn.textContent = playPauseBtn.textContent === "⏸" ? "▶" : "⏸";
});