// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const numbarray = [];

for(let i = 0; i < 6; i++){
    const number = parseInt(prompt('Inserisci un numero:'))
    const thisNumber = number;
    if(thisNumber % 2 !== 0){
        numbarray.push(thisNumber);
    }
    
}

//Stampo il risultato
document.getElementById('result').innerHTML = numbarray;