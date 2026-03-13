// cc2.js
// Base data from Challenge #1
let paintings = [
  { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
  { title: "The Last Supper", artist: "Leonardo da Vinci", date: 1495 },
];

// Constructor function
let Image = function (title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
};

// Factory function
let getImage = (title, artist, date) => ({
  title,
  artist,
  date,
});

let images1 = paintings.map((p) => new Image(p.title, p.artist, p.date));
let images2 = images1.map((p) => getImage(p.title, p.artist, p.date));

console.log("Contents of images2:");
images2.forEach((img) => console.log(`${img.title} by ${img.artist}`));
