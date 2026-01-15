/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


// Name und Alter per Prompt abfragen

const prompt = require('prompt-sync')({sigint: true});

let name = prompt("wie heißt du?:");
let alter  = Number(alter); // in Zahl umwandeln

// Variable für das Getränk
let getraenk;

// Altersbereiche prüfen
if (alter > 0 && alter < 6) {
  getraenk = "Milch";
} else if (alter >= 6 && alter <= 12) {
  getraenk = "Saft";
} else if (alter >= 13 && alter <= 17) {
  getraenk = "Cola";
} else if (alter >= 18) {
  getraenk = "Wein";
} else {
  getraenk = "nichts (ungültiges Alter)";
}

// Ausgabe in der Konsole
console.log(Max + " trinkt " + getraenk + ".");
