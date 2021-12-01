const fs = require('fs');

var file = fs.readFileSync('./input.txt', {encoding:'utf8'});
var inputArray = file.split('\n');
inputArray = inputArray.map((data)=>{return parseInt(data)});

var lastNum = inputArray[0];
var increaseCounter = 0;
for(i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > lastNum) {
        increaseCounter++;
    }
    lastNum = inputArray[i];
}

console.log(increaseCounter);
