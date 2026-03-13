// cc5.js
// Recursive deep comparison function
let deepComp = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];
    // Check for nesting/objects
    let areObjects =
      typeof val1 === "object" &&
      val1 !== null &&
      typeof val2 === "object" &&
      val2 !== null;

    if (areObjects && !deepComp(val1, val2)) return false;
    if (!areObjects && val1 !== val2) return false;
  }
  return true;
};

// Testing code
let a = { x: [1, 2, 3, 4, 5], y: 0, z: { m: "test", n: false } };
let b = { x: [1, 2, 3, 4, 5], y: 0, z: { m: "test", n: false } };
let c = { x: [1, 2, 3, 4, 5, 6], y: 0, z: { m: "test", n: false } };

console.log(deepComp(a, b)); // -> true
console.log(deepComp(a, c)); // -> false
