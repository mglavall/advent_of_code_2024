const fs = require("node:fs");
const data = fs.readFileSync("./input.txt", "utf8").trim().split(" ");

const processStoneLine = (stoneLine, numberOfTimes) => {
  let cache = new Map();

  stoneLine.forEach((stone) => {
    cache.set(stone, cache.get(stone) + 1 || 1);
  });
  for (let i = 0; i < numberOfTimes; i++) {
    const newCache = new Map();

    cache.forEach((value, key) => {
      if (key === "0") {
        newCache.set("1", newCache.get("1") + value || value);
      } else if (key.length % 2 === 0) {
        newCache.set(
          Number(key.substring(0, key.length / 2)).toString(),
          newCache.get(Number(key.substring(0, key.length / 2)).toString()) +
            value || value
        );
        newCache.set(
          Number(key.substring(key.length / 2)).toString(),
          newCache.get(Number(key.substring(key.length / 2)).toString()) +
            value || value
        );
      } else {
        newCache.set(
          `${Number(key) * 2024}`,
          newCache.get(`${Number(key) * 2024}`) + value || value
        );
      }
    });

    cache = newCache;
  }
  let sum = 0;
  cache.forEach((v) => {
    sum += v;
  });
  return sum;
};

console.log(processStoneLine(data, 75));
