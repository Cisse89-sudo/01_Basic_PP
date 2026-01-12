
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
let summe;
const prompt = require('prompt-sync')({sigint: true});
let ersteZahl = prompt("Erste Zahl?: ");
let zweiteZahl = prompt("Zweite Zahl?: ");
summe = parseInt(ersteZahl) + parseInt(zweiteZahl);
//summe = ersteZahl + zweiteZahl;
console.log("Die Summe der Zahlen ist: " + summe);

const prompt2 = require('prompt-sync')({sigint: true});

// Eingabe der beiden Zahlen
let a = prompt2("Bitte Zahl a eingeben: ");
let b = prompt2("Bitte Zahl b eingeben: ");

// WICHTIG: Umwandlung von String zu Number
// prompt() liefert immer Text (String) zurück.
let summe2 = Number(a) + Number(b);

// Ausgabe des Ergebnisses
console.log(`Die Summe von ${a} und ${b} ist: ${summe2}`);