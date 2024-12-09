const fs = require("node:fs");
const data = fs
  .readFileSync("./input2.txt", "utf8")
  .trim()
  .split("\n")
  .map((a) => a.trim().split(""));
const word = "MAS";
let currentWord = [];
const xmaslizer = (x, y) => {
  if (data[x]?.[y] === "A") {
    const hasOneMas =
      (data[x + 1]?.[y + 1] === "S" && data[x - 1]?.[y - 1] === "M") ||
      (data[x + 1]?.[y + 1] === "M" && data[x - 1]?.[y - 1] === "S");
    const hasAnotherMas =
      (data[x + 1]?.[y - 1] === "S" && data[x - 1]?.[y + 1] === "M") ||
      (data[x + 1]?.[y - 1] === "M" && data[x - 1]?.[y + 1] === "S");
    return hasOneMas && hasAnotherMas;
  }
  return false;
};

const findXmas = () => {
  let xMasCount = 0;
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data.length; y++) {
      if (xmaslizer(x, y)) {
        xMasCount++;
      }
    }
  }

  console.log(xMasCount);
};

findXmas();
