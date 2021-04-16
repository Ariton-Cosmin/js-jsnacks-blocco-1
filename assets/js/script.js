// jsnack n.9
/*
// fare la somma dei primi 10n.
var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var somma = sommaNumeri(arrNum);
console.log(somma);

function sommaNumeri(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// fare la media
console.log(somma / 10);
*/



// jsnack n.8
/*
var numeri = prompt("Segli un numero di 4 cifre");
var somma = 0;

for (var i = 0; i < numeri.length; i++) {
    console.log(numeri.charAt(1));
    somma += parseInt(numeri.charAt(1));
}

console.log(somma);
*/



// jsnack n.7
/*
var limite = 1000;
var potenza = 1;
var counterPotenza = 1;

while (potenza < limite) {
    console.log(potenza);
    console.log("Elevo il 2 alla " + counterPotenza);
    potenza = Math.pow(2, counterPotenza);
    counterPotenza++
}
*/



// jsnack n.6
/*
// richiedo il numero all'utente
var cubo = parseInt(prompt("Di quanti numeri vuoi sommare il cubo?"));

// inizializzo una var per la somma
var somma = 0;

// creo un ciclo dove calcolo i cubi e li sommo
for (var i = 1; i <= cubo; i++) {
    console.log(i);
    console.log(Math.pow(i, 3));
    console.log("-------");
    somma += Math.pow(i, 3);
    console.log("--- SOMMA ---- " + somma);
}

// output
console.log("La somma dei cubi è " + somma);
*/



// jsnack n.5
/*
// creare un array vuoto
var arr_vuoto = [];

// creo un ciclo di 6 prompt
for (var i = 0; i < 6; i++) {
    var numeri = parseInt(prompt("inserisci un numero"));
    if (numeri % 2 != 0) {
        arr_vuoto.push(numeri);
    }
}

// output
console.log(arr_vuoto);
*/



// jsnack n.4
/*
// creare un array
var invitati = ["cosmin", "iris", "pino", "angelo", "vincenzo"];

// chiedere il nome dell'utente con un prompt
var nome_utente = prompt("inserisci il tuo nome");

// creo un flag di verifica
var puoi_accedere = false;

// crare un ciclo for
for (var i = 0; i < invitati.length; i++) {
    var nomi = invitati[i]
    if (nomi === nome_utente) {
        puoi_accedere = true;
    }
}

// dare un output
if (puoi_accedere) {
    console.log("puoi entrare");
} else {
    console.log("non puoi entrare");
}
*/



// jsnack n.3
/*
// creare una variabile per la somma
var somma = 0;

// creare un ciclo per i prompt
for (var i = 0; i < 10; i++) {
    var num = parseInt(prompt("inserisci un numero"));
    somma += num;
}

// output
console.log(somma);
*/



// jsnack n.2
/* 
// inserire due prompt
var parola1 = prompt("inserisci la prima parola");
var parola2 = prompt("inserisci la seconda parola");

// verificare le leunghezze dei prompt e generare un output
if (parola1.length == parola2.length) {
    alert("le parole sono lunghe uguali");
} else if (parola1.length < parola2.length) {
    console.log(parola1 + " " + parola2);
} else {
    console.log(parola2 + " " + parola1);
}
*/



// jsnack n.1
/*
// inserire due prompt
var num1 =  parseInt(prompt("aggiungere il primo numero"));
var num2 = parseInt(prompt("aggiungere il secondo numero"));

// verificare il prompt maggiore o uguale
if (num1 > num2) {
    console.log("numero 1 è più grande di numero " + num2);
} else if (num1 < num2) {
    console.log("numero 2 è più grande di numero " + num1);
} else {
    console.log("sono uguali");
}
*/