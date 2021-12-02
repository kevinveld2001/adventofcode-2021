const fs = require('fs');

var file = fs.readFileSync('./input.txt', {encoding:'utf8'});
var inputArray = file.split('\n');

inputArray = inputArray.map((data)=>data.split(' '));

var x = 0;
var y = 0;
var aim = 0;
inputArray.forEach((data)=>{
    switch(data[0]) {
        case 'up':
            aim -= parseInt(data[1]);
        break;
        case 'down':
            aim += parseInt(data[1]);
        break;
        case 'forward':
            x += parseInt(data[1]);
            y += aim * parseInt(data[1]);
        break;
    }
});
console.log(x * y);
