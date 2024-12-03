const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const parseAndMultiply = (corruptedValue)=>{
    const parsedValue = corruptedValue.matchAll(/mul\((\d+)[,](\d+)\)/g);
    const matchAll = Array.from(parsedValue);
    return matchAll.reduce((acc,val)=>{
        return acc + (val[1]*val[2])
    },0)
}


// This one takes do´s and donts into consideration
const parseAndMultiplyEnhanced = (corruptedValue)=>{
    const parsedValue = corruptedValue.matchAll(/mul\((\d+)[,](\d+)\)|do\(\)|don't\(\)/g);
    const matchAll = Array.from(parsedValue);
    let isEnabled = true;
    return matchAll.reduce((acc,val)=>{
        if(val[0] === "don't()"){
            isEnabled = false;
            return acc;
        }
        if(val[0] === "do()"){
            isEnabled = true;
            return acc;
        }
        if(!isEnabled){
            return acc;
        }
        return acc + (val[1]*val[2])
    },0)
}

console.log(parseAndMultiplyEnhanced(data));