const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let inp = document.querySelector("input");

let escribir = function () {
  let texto = inp.value;
  streamers
    .filter((streamer) => streamer.name.includes(texto))
    .map((streamer) => console.log(streamer));
};

document.querySelector("button").addEventListener("click", escribir);
