console.log('js ok');

// PALINDROMO
document.getElementById("button-palindromo").addEventListener("click", function () {
    console.log('Mi hai cliccato');

    const word = document.getElementById("parolaInserita").value;
    console.log(word);

    const result = isPalindroma(word);
    document.getElementById("result-palindromo").innerHTML = result;
})

// FUNZIONE
function isPalindroma(str) {
    // trasformo tutta la stringa in lettere minuscole
    let lowerStr = str.toLowerCase();

    // .split crea array divendo la parola in lettere 
    // .reverse inverte l'ordine dell'array creato con split
    // .join unisce le lettere dell'array e crea una stringa
    let reverseLowerStr = lowerStr.split('').reverse().join('');
    console.log(reverseLowerStr);

    if (reverseLowerStr === lowerStr) {
        return 'La parola è palindroma';
    } else {
        return 'La parola non è palindroma';
    }
}



// PARI O DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let userChoice = '';

// ciclo while per controllare che venga inserita una parola e che sia o pari o dispri
while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Scegli Pari o Dispari:");
    if (userChoice !== undefined) {
        userChoice = userChoice.toLowerCase();
    }
}
console.log('User ha scelto:' + userChoice);

// inserimento numero utente e controllo numero inserito
let userNum = 0;
while (isNaN(userNum) || userNum < 1 || userNum > 5) {
    userNum = parseInt(prompt("Inserisci un numero tra 1 e 5:"));
}
console.log('User ha scelto il numero' + userNum);


// generiamo numero random da 1 a 5 per il computer
const pcNum = getRandomNum(1, 5);
console.log('Numero random PC:', pcNum);

// sommiamo il numero scelto dall'utente e il numero random per il pc
const sum = userNum + pcNum;
console.log('La somma è:', sum);

// la somma è pari o dispari?
const oddOrEven = isOddOrEven(sum) ? 'pari' : 'dispari';
console.log('La somma è:', oddOrEven);

// in base alla scelta dell'utente vediamo chi ha vinto
const winner = console.log((oddOrEven === userChoice) ? 'Utente vince' : 'Pc vince');



// FUNZIONI
//funzione numero random
function getRandomNum(min, max) {

    const range = max - min;
    const random = Math.floor(Math.random() * range) + min;

    return random;
}

// funzione pari o dispari
function isOddOrEven(value) {

    return (value % 2 === 0); //mi ritorna true o false

}