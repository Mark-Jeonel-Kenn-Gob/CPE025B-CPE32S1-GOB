// cc3.js
let Image = function (title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
};

let images = {
  list: [], // Array of image objects
  contains: function (title) {
    return this.list.some((img) => img.title === title); // Check if exists
  },
  add: function (title, artist, date) {
    if (!this.contains(title)) {
      this.list.push(new Image(title, artist, date)); // Add if not present
    }
  },
  show: function () {
    this.list.forEach((img) =>
      console.log(`${img.title} (${img.artist}, ${img.date})`),
    ); // Display list
  },
  clear: function () {
    this.list = []; // Remove all objects
  },
};

// Test sequence
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Last Supper", "Leonardo da Vinci", 1495);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.add("Mona Lisa", "Leonardo da Vinci", 1503); // Duplicate check
images.show();
images.clear();
images.show();
