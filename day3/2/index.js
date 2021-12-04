const fs = require('fs');

let file = fs.readFileSync('./input.txt', {encoding:'utf8'});
let inputArray = file.split('\n').map((data)=> parseInt(data, 2));

let ogrFinderArray = [...inputArray];
let ogrFOUND = false;
let ogr;
let ogrBits = "";

let co2srFinderArray = [...inputArray];
let co2srFOUND = false;
let co2sr;
let co2srBits = "";

const biggestBin  =  '100000000000';
const binOneToBig = '1000000000000';
// const biggestBin  =  '10000';
// const binOneToBig = '100000';
let bin = parseInt(biggestBin,2);
for(b=0;b<biggestBin.length;b++) {
    
    findOxygenGeneratorRating(bin);
    CO2ScrubberRating(bin);

    bin = bin >> 1; 
}

function findOxygenGeneratorRating(bin) {

    let oneCounter = 0;
    let zeroCounter = 0;
    ogrFinderArray.forEach((data)=>{
        if (data&bin) {
            oneCounter++;
        } else {
            zeroCounter++;
        }
    });

    if (ogrFOUND)
        return
     
    ogrBits += oneCounter >= zeroCounter? "1": "0";
    
    let newFinderArray = [];
    ogrFinderArray.forEach((data) => {
        testBin = (data + parseInt(binOneToBig, 2)).toString(2);
        if (testBin.slice(1, ogrBits.length+1) === ogrBits) {
            newFinderArray.push(data);
        }
    });    

    if (newFinderArray.length === 1) {
        ogrFOUND = true;
        ogr = newFinderArray[0];
    }
    ogrFinderArray = newFinderArray;
}

function CO2ScrubberRating(bin) {

    let oneCounter = 0;
    let zeroCounter = 0;
    co2srFinderArray.forEach((data)=>{
        if (data&bin) {
            oneCounter++;
        } else {
            zeroCounter++;
        }
    });

    if (co2srFOUND) 
        return
    co2srBits += oneCounter < zeroCounter ? "1": "0";
    
    let newFinderArray = [];
    co2srFinderArray.map((data) => {
        testBin = (data + parseInt(binOneToBig, 2)).toString(2);
        if (testBin.slice(1, ogrBits.length+1) === co2srBits) {
            newFinderArray.push(data);
        }
    })
    if (newFinderArray.length === 1) {
        co2srFOUND = true;
        co2sr = newFinderArray[0];
    }    
    co2srFinderArray = newFinderArray;
}

console.log(ogr);
console.log(co2sr);


console.log(co2sr * ogr);
//3366884 low