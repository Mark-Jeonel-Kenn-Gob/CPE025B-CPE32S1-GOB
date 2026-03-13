class MyIterable {
  constructor() {
    this.data = new Set();
  }

  add(element) {
    this.data.add(element); // Set inherently ignores duplicates
  }

  has(element) {
    return this.data.has(element);
  }

  del(element) {
    this.data.delete(element);
  }

  get length() {
    return this.data.size;
  }

  *[Symbol.iterator]() {
    for (let element of this.data) {
      yield element;
    }
  }
}

// Test Code
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);
console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5
