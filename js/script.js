console.log('js ok');

// PALINDROMO
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



// PARI O DISPARI
let writeResult = document.getElementById("result-pari-dispari");

document.getElementById("button-pari").addEventListener("click", function () {
    btnPari = 1;
    console.log('user sceglie pari')
    document.getElementById("user-scelta").innerHTML = 'User sceglie pari';
    if (btnPari === ex()) {
        writeResult.innerHTML = 'User vince';
    } else {
        writeResult.innerHTML = 'Pc vince';
    }
})

document.getElementById("button-dispari").addEventListener("click", function () {
    btnDispari = 0;
    console.log('user sceglie dispari')
    document.getElementById("user-scelta").innerHTML = 'User sceglie dispari';
    const funcEx = ex();
    if (btnDispari === funcEx) {
        writeResult.innerHTML = 'User vince';
    } else {
        writeResult.innerHTML = 'Pc vince';
    }
})



function ex() {
    document.getElementById("button-gioca").addEventListener("click", function () {
        const userNum = parseInt(document.getElementById("numero-inserito").value);
        console.log(userNum);

        if (!isNaN(userNum) && userNum >= 1 && userNum <= 5) {
            const pcNum = getRandomNum(1, 5);
            console.log('numero random pc', pcNum);

            const sum = pcNum + userNum;
            console.log('somma numero user e pc', sum);

            const oddEven = isOddOrEven(sum);
            console.log(oddEven);

            return oddEven;

        } else {
            return writeResult.innerHTML = 'Valore inserito non valido';
        }
    })
}

function getRandomNum(min, max) {

    const range = max - min;
    const random = Math.floor(Math.random() * range) + 1;

    return random;
}

function isOddOrEven(value) {

    return (value % 2 === 0) ? 1 : 0;

}