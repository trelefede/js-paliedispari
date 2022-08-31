console.log('js ok');


document.getElementById("button-palindromo").addEventListener("click", function () {
    console.log('Mi hai cliccato');

    const word = document.getElementById("parolaInserita").value;
    console.log(word);

    const result = isPalindroma(word);
    document.getElementById("result-palindromo").innerHTML = result;
})


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

