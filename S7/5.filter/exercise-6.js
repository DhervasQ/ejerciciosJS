const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

// console.log(
//   streamers
//     .filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
//     .filter((streamer) => streamer.age > 35)
//     .map((streamer) => {
//       streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//       return streamer;
//     })
// );

console.log(
  streamers.filter((streamer) =>
    streamer.gameMorePlayed.includes("Legends") && streamer.age > 35
      ? (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase())
      : ""
  )
);
