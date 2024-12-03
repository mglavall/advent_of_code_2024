const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const parseAndMultiply = (corruptedValue)=>{
    const parsedValue = corruptedValue.matchAll(/mul\((\d+)[,](\d+)\)/g);
    const matchAll = Array.from(parsedValue);
    return matchAll.reduce((acc,val)=>{
        return acc + (val[1]*val[2])
    },0)

}

console.log(parseAndMultiply(data));