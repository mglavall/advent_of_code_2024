const fs = require("node:fs");
const data = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((a) => a.trim().split(""));
const word = "XMAS";
let currentWord = [];
const xmaslizer = (x, y, n, sum) => {
  console.log(sum, currentWord, data[x]?.[y]);
  if (data[x]?.[y] === word[n]) {
    currentWord.push(data[x]?.[y]);

    if (n === word.length - 1) {
      currentWord = [];
      return 1;
    }

    if (sum) {
      return xmaslizer(x + sum[0], y + sum[1], n + 1, sum);
    }

    return (
      xmaslizer(x, y + 1, n + 1, [0, 1]) +
      xmaslizer(x, y - 1, n + 1, [0, -1]) +
      xmaslizer(x + 1, y + 1, n + 1, [1, 1]) +
      xmaslizer(x - 1, y - 1, n + 1, [-1, -1]) +
      xmaslizer(x - 1, y, n + 1, [-1, 0]) +
      xmaslizer(x - 1, y + 1, n + 1, [-1, 1]) +
      xmaslizer(x + 1, y - 1, n + 1, [1, -1]) +
      xmaslizer(x + 1, y, n + 1, [1, 0])
    );
  }
  currentWord = [];
  return 0;
};

const findXmas = () => {
  let xMasCount = 0;
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data.length; y++) {
      xMasCount = xMasCount + xmaslizer(x, y, 0);
    }
  }

  console.log(xMasCount);
};

findXmas();
