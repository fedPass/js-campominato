// A. generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// A1.creo l’array(vuoto)
 var mine = [];
 while (mine.length < 16) {
    // A2. Creo un numero causale
    var numero = generaRandom(1,100);
    console.log(numero);
    // A3. Controllo che il numero non ci sia nell’Array
    if(!mine.includes(numero)) {
        // A4. Se non c’è lo metto nell’array
        mine.push(numero);
    }
}
console.log('Mine generate: ' + mine);

// B. chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// chiedi un numero finchè numeroUtente non è incluso in mine
var numeroTentativi = 0;
var numeriInseriti = [];

do {
    //chiedo un numero tra 1 e 100
    var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    console.log('Hai inserito il numero ' + numeroUtente);

    if (numeroNonValido(numeroUtente, numeriInseriti)) {
        console.log('non hai inserito un numero valido');
    } else {
        numeroTentativi++;
        numeriInseriti.push(numeroUtente);
    }
} while (!mine.includes(numeroUtente) && numeroTentativi < 84);
// La partita termina quando il giocatore inserisce un numero “mina” o raggiunge il numero massimo possibile di numeri consentiti
// inserisce un numero “mina” --> !mine.includes(numeroUtente)
// raggiunge il numero massimo --> (numeroTentativi < 84)


if (numeroTentativi == 84) {
    console.log('hai vinto..che culo!');
} else {
    console.log('Boom! Hai preso una mina');
    //C. Al termine della partita il software deve comunicare il numero di volte che l’utente ha inserito un numero consentito.
    console.log('Hai perso dopo ' + numeroTentativi + ' tentativi');
}

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}

//funzione che controlla che il numeroUtente è valido (è numero, compreso tra 1 e 100, non inserito precedentemente)
function numeroNonValido (numeroUtente, numeriInseriti) {
    if (isNaN(numeroUtente) && numeroUtente < 1 && numeroUtente > 100 && numeriInseriti.includes(numeroUtente)) {
        return true;
    } else {
        return false;
    }
}
