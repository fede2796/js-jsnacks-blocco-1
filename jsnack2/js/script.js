//vreo la stringa di numeri
const numbers = '1234';
let x = 0;
for(let i = 0 ; i < numbers.length ; i++){
    
    let thisNumber = parseInt(numbers[i]);
    x += thisNumber ;
}

console.log(x);