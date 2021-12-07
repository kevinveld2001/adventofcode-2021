const fs = require('fs');

let file = fs.readFileSync('./input.txt', {encoding:'utf8'});
let inputArray = file.split('\r');
inputArray = inputArray.map((data)=>{
    return data.split('\n').map((row)=>{
        return row.split(' ');
    });
});
inputArray = inputArray[0];
let input = []
let bingocard = [];

inputArray.forEach((data, key)=>{
    if (data.length <= 1 && data[0] == '') {
        input.push(bingocard);
        bingocard = [];
        return;
    }
    bingocard.push(data);
});
input.push(bingocard);

input = input.map((bingocard)=>{
    return bingocard.map((row)=>{
        return row.filter(c => c);
    });
});
let bingoNumbers = input[0][0][0].split(',').map((data)=>parseInt(data));
input.shift();
console.log(bingoNumbers);

// input.forEach((bingocard)=>{
//     console.table(bingocard);
// })


bingoNumbers.forEach((bingoNumber)=>{
    if (input.length === 1) {
        input[0] = input[0].map((y)=>y.map((x)=>typeof x == "string"?x: x.toString()));
        bingoNumbers.forEach((bingoNumber)=>{
            let newBingoCard = markBingoCard(input[0], bingoNumber);
            
                console.table(newBingoCard);
                let count = 0;
                newBingoCard.forEach((y)=>{
                    y.forEach((x)=>{
                        if (typeof x == 'string') {
                            count += parseInt(x);
                        }
                    })
                })
                console.log(count);
                console.log(bingoNumber);
                console.log(count * parseInt(bingoNumber));
            if (checkBingoRow(newBingoCard) || checkBingoColumn(newBingoCard)) {
                process.exit(1);
            }
            input[0] = newBingoCard;
        })
    }
    newInput = [];
    input.forEach((bingoCard)=>{
        
        let newBingoCard = markBingoCard(bingoCard, bingoNumber);
        // console.table(newBingoCard);
        if( !(checkBingoRow(newBingoCard) || checkBingoColumn(newBingoCard) && input.length !== 1) ) {
            newInput.push(newBingoCard);
        }
        
    });
    input = newInput;
    
});


function markBingoCard(card, number) {
    return card.map((row)=>{
        return row.map((cardNumber)=>{
            if (cardNumber == number) {
                return parseInt(cardNumber);
            }
            return cardNumber;
        })
    })
} 


function checkBingoRow(card) {
    card.forEach((y)=>{
        let fullRowDrawn = true;
        y.forEach((x)=>{
            if (typeof x == "string") {
                fullRowDrawn = false;
            }
        });
        if (fullRowDrawn) {
            return true;
        }
    })
}

function checkBingoColumn(card) {
    for(y=0;y<5;y++) {
        let fullColumnDrawn = true;
        for(x=0;x<5;x++) {
            if (typeof card[y][x] == "string") {
                fullColumnDrawn = false;
            }
        }
        if (fullColumnDrawn) {
            return true;
        }
    }
}
//17238 low
//15886 low
//10780 
//15886
//31434 heigh
//17238
//22785
//2184
//42588