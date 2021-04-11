// jsnak n.5
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