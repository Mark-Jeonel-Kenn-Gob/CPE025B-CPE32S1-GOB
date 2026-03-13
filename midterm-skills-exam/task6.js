function firstUniqueChar(str) {
    // Code Here
    const freq = {};

    for (let char of str) {
      const lower = char.toLowerCase();
      freq [lower] = (freq[lower] || 0) + 1;
    }

    for (let char of str) {
      if (freq[char.toLowerCase()] === 1) {
        return char;
      }
    }
    return null;
    }

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 

//six seveeeeeeennnn