const sumAll = function (a, b) {
  let sum = 0;

  if (
    [a, b].some((n) => typeof n !== "number" || n < 0 || !Number.isInteger(n))
  ) {
    return "ERROR";
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
