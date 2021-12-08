const fs = require('fs');

let file = fs.readFileSync('./input.txt', {encoding:'utf8'});
let inputArray = file.split(',').map((data)=>parseInt(data));

let newArray = [];

inputArray.forEach((el)=>{
    if(newArray[el] === undefined) {
        newArray[el] = 1;
    } else {
        newArray[el]++;
    }
});
console.table(newArray);

let fuels = [];

inputArray.forEach((el1, index1)=>{
    let fuel = 0;
    inputArray.forEach((el, index)=>{
        let addFuel = el1 - el;
        if (addFuel < 0) {
            addFuel = -addFuel;
        }
        fuel += addFuel;
        
    })
    fuels.push(fuel);
});

console.log(fuels);
smallestFuel = fuels[0];
fuels.forEach((el)=>{
    if (smallestFuel > el) {
        smallestFuel = el
    }
})
console.log(smallestFuel);
//387165 high
//469079
//351901