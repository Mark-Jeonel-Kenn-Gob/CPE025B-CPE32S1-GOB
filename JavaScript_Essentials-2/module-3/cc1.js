function getRandomSet(count, max, allowDuplicates, isSorted) {
  let result = [];
  let uniqueSet = new Set();

  while (result.length < count) {
    let num = Math.floor(Math.random() * (max + 1)); // Draws 0 to max
    if (!allowDuplicates) {
      if (!uniqueSet.has(num)) {
        uniqueSet.add(num);
        result.push(num);
      }
    } else {
      result.push(num);
    }
  }
  if (isSorted) {
    result.sort((a, b) => a - b);
  }
  return result;
}

// Test Code
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
