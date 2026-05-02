const sounds = [
  "jacksparrow",
  "kgf",
  "money_heist",
  "panchayat",
  "rolex",
  "scam_1992",
  "spiderman",
  "vip",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAllSounds();
    const audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopAllSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
