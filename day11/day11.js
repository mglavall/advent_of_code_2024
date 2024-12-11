const fs = require("node:fs");
const data = fs.readFileSync("./input.txt", "utf8").trim().split(" ");
console.log(data);

const processStone = (stone) => {
  if (stone === "0") {
    return "1";
  }

  if (stone.length % 2 === 0) {
    return [
      Number(stone.substring(0, stone.length / 2)).toString(),
      Number(stone.substring(stone.length / 2)).toString(),
    ];
  }
  return `${Number(stone) * 2024}`;
};

const processStoneLine = (stoneLine, numberOfTimes) => {
  let result = stoneLine;
  for (let i = 0; i < numberOfTimes; i++) {
    result = result.flatMap((a) => {
      return processStone(a);
    });
  }
  return result;
};

console.log(processStoneLine(data, 5).length);
