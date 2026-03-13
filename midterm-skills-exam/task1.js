function sumDeepStrictNumbers(arr) {
    // Code Here

    let sum = 0;
    for (let item of arr) {
        
      if (Array.isArray(item)) {
        sum += sumDeepStrictNumbers(item);

      } else if (typeof item === "number" && !Number.isNaN(item)) {
        sum += item;
        
      }
    }
    return sum;

}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));
