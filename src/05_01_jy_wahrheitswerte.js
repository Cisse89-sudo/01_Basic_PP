/* Berechnung Alter */

// Deklaration 
let aktuellesJahr, ersterName, zweiterName, geburtsJahrErsterName, geburtsJahrZweiterName;
const prompt = require('prompt-sync')({sigint: true});

// Eingabe
ersterName = prompt("Bitte geben Sie den Namen der ersten Person ein: ");
zweiterName = prompt("Bitte geben Sie den Namen der zweiten Person ein: ");
console.clear();
geburtsJahrErsterName = prompt(`Geben Sie das Geburtsjahr von ${ersterName} ein: `);
geburtsJahrZweiterName = prompt(`Geben Sie das Geburtsjahr von ${zweiterName} ein: `);
console.clear();
aktuellesJahr = prompt("Bitte geben Sie das aktuelle Jahr ein: ");
console.clear();
// Berechnung Alter
let alterErsterName = aktuellesJahr - geburtsJahrErsterName;
let alterZweiterName = aktuellesJahr - geburtsJahrZweiterName;

// Ausgabe
console.log(`Das Alter von ${ersterName} ist: ${alterErsterName}`);
console.log(`Das Alter von ${zweiterName} ist: ${alterZweiterName}`);

