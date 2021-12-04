const fs = require('fs');

let file = fs.readFileSync('./input.txt', {encoding:'utf8'});
let inputArray = file.split('\n').map((data)=> parseInt(data, 2));


const biggestBin = '100000000000';
let bin = parseInt(biggestBin,2);

let oneArray = [];
let zeroArray = [];
for(b=0;b<biggestBin.length;b++) {
    oneArray[b] = 0;
    zeroArray[b] = 0;
    inputArray.forEach((data)=>{
        if (data&bin) {
            oneArray[b]++;
        } else {
            zeroArray[b]++;
        }
    });
    bin = bin >> 1; 
}
console.log(oneArray);
console.log(zeroArray);

let gamma_rate = '';
let epsilon_rate = '';

for(b=0;b<biggestBin.length;b++) {
    if (oneArray[b] > zeroArray[b]) {
        gamma_rate += '1';
        epsilon_rate += '0';
    } else {
        gamma_rate += '0';
        epsilon_rate += '1';
    }
}

console.log(parseInt(gamma_rate,2));
console.log(parseInt(epsilon_rate,2));

console.log( parseInt(gamma_rate,2) * parseInt(epsilon_rate,2));
//4045184 high
//2714816 low
//10860928