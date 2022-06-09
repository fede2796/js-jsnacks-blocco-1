//creo array numeri
const number = [0,1,2,3,4,5,6,7,8] ;

//faccio un for per leggere l'array
for(let i = 0; i < number.length ; i++){
    let thisNumber = number[i] ;
    if(thisNumber % 2 === 0){
       document.getElementById('green').innerHTML += thisNumber + ' ' ;
    }
    else{
        document.getElementById('red').innerHTML += thisNumber + ' ' ;
    }

    console.log(number);
}