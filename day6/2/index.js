const fs = require('fs');

let file = fs.readFileSync('./input.txt', {encoding:'utf8'});
let inputArray = file.split(',').map((data)=>parseInt(data));

let fish = [0,0,0,0,0,0,0,0,0];

inputArray.forEach((data)=>{
    fish[data-1]++;
    
})
let addNextRound = 0;

for (let i = 0; i < 256 ; i++) {
    if (i !== 0)
        fish.push(addNextRound);
    addNextRound = fish[0];
    let move = fish[0];
    fish.shift();
    fish[6] += move;
}

let count = 0;
fish.forEach((data)=>{
    count += data; 
})
console.log(count);