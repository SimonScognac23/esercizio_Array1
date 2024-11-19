


let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];



// funzione di ordine superiore con la callback pensata unicamente per il .sort
function ordineDecrescente(number) {
    return number.sort((a, b) => b - a);
}

function ordineCrescente(number) {
    return number.sort((a, b) => a - b);
}



// l'array di numeri lo salvo dentro la variabile arrayCrescente 
let arrayCrescente = ordineCrescente(array);

console.log(arrayCrescente);



// l'array di numeri lo salvo dentro la variabile arrayDecrescente 
let arrayDecrescente = ordineDecrescente(array);

console.log(arrayDecrescente);







