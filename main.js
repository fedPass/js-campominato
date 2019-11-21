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
        console.log(mine);
    }
}
console.log(mine);

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}

// B. chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
if ((numeroUtente <= 1) && (numeroUtente >= 100)) {
    console.log('hai inserito ' + numeroUtente);
} else {
    console.log('non hai inserito un numero valido');
}


// C. Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina)
// altrimenti si continua chiedendo all’utente un altro numero.
// 1) Se pesto la mina GAME OVER(se il numero è nell’array sei al CREATORE )
// 2)Altrimenti ripetiamo la richiesta di inserire un numero

// La partita termina quando il giocatore inserisce un numero “mina” o raggiunge il numero massimo possibile di numeri consentiti

// Al termine della partita il software deve comunicare il numero di volte che l’utente ha inserito un numero consentito.
