const memo = {};
function power(base, exp) {
  const key = `${base},${exp}`;
  if (key in memo) return memo[key];

  if (exp === 0) return 1;
  if (exp < 0) return 1 / power(base, -exp);

  memo[key] = base * power(base, exp - 1);
  return memo[key];
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));
