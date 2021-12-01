const fs = require('fs');

var file = fs.readFileSync('./input.txt', {encoding:'utf8'});
var inputArray = file.split('\n');
inputArray = inputArray.map((data)=>{return parseInt(data)});

var measurmentSum = [...inputArray];
for(i=0;i<inputArray.length;i++) {
    if (inputArray[i+1] != undefined) {
        measurmentSum[i] += inputArray[i+1];
    }
    if (inputArray[i+2] != undefined) {
        measurmentSum[i] += inputArray[i+2];
    }
}

var lastNum = measurmentSum[0];
var increaseCounter = 0;
for(i = 1; i < measurmentSum.length; i++) {
    if (measurmentSum[i] > lastNum) {
        increaseCounter++;
    }
    lastNum = measurmentSum[i];
}

console.log(increaseCounter);


//1762 to heigh
//53 not it