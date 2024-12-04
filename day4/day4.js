const fs = require("node:fs");
const data = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((a) => a.trim().split(""));
const word = "XMAS";
let currentWord = [];
const xmaslizer = (x, y, n, sum) => {
  if (data[x]?.[y] === word[n]) {
    currentWord.push(data[x]?.[y]);

    if (n === word.length - 1) {
      console.log(currentWord, n);
      currentWord = [];
      return true;
    }
    if (sum) {
      return xmaslizer(x + sum[0], y + sum[1], n + 1);
    }

    return (
      xmaslizer(x, y + 1, n + 1, [0, 1]) ||
      xmaslizer(x, y - 1, n + 1, [0, -1]) ||
      xmaslizer(x + 1, y + 1, n + 1, [1, 1]) ||
      xmaslizer(x - 1, y - 1, n + 1, [-1, -1]) ||
      xmaslizer(x - 1, y, n + 1, [-1, 0]) ||
      xmaslizer(x - 1, y + 1, n + 1, [-1, 1]) ||
      xmaslizer(x + 1, y - 1, n + 1, [1, -1]) ||
      xmaslizer(x + 1, y, n + 1, [1, 0])
    );
  }
  currentWord = [];
  return false;
};

const findXmas = () => {
  let xMasCount = 0;
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data[x].length; y++) {
      if (xmaslizer(x, y, 0)) {
        xMasCount++;
      }
    }
  }

  console.log(xMasCount);
};

findXmas();
