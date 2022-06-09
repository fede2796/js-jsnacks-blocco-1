// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let x = 0;
for(let i = 0; i < 10 ; i++){
    const number = parseInt(prompt ('Inserisci il numero'));
    const thisNumber = number;
    x += thisNumber;
    console.log(thisNumber)
   
}
console.log(x)
 
//  Stampo il risultato
document.getElementById('result').innerHTML = x;