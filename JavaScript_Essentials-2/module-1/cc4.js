// cc4.js
let Image = function (title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
};

// Use prototype to add show method to Image constructor
Image.prototype.show = function () {
  console.log(`${this.title} (${this.artist}, ${this.date})`);
};

let images = {
  list: [],
  add: function (title, artist, date) {
    this.list.push(new Image(title, artist, date));
  },
  edit: function (title, artist, date) {
    let img = this.list.find((i) => i.title === title);
    if (img) {
      img.artist = artist;
      img.date = date;
    } // Change properties
  },
  delete: function (title) {
    let index = this.list.findIndex((i) => i.title === title);
    if (index !== -1) {
      this.list.splice(index, 1);
    } // Delete list element
  },
  show: function () {
    this.list.forEach((img) => img.show()); // Uses the Image.prototype.show method
  },
};

// Test sequence
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Last Supper", "Leonardo da Vinci", 1495);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.edit("Mona Lisa", "Leonardo da Vinci", 1504);
images.delete("The Last Supper");
images.show();
