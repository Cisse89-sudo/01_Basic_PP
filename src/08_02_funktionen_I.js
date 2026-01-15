
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

function halloKlasse()  
{
    console.log("Hallo Klasse!");
}
halloKlasse();  // Aufruf der Funktion

// 2. Parameter und Argumente

function begruessung(name)  
{
    console.log("Hallo " + name + "!");
}
begruessung("Maria");  // Aufruf der Funktion mit Argument

// 3. Rückgabewerte

function quadriere(zahl)  
{
    return zahl * zahl;
}
let ergebnis = quadriere(5);  // Aufruf der Funktion und Speicherung des Rückgabewerts
console.log(ergebnis);  // Ausgabe: 25

// 4. Mehrere Parameter

function addiere(a, b)  
{
    return a + b;
}
let summe = addiere(3, 7);  // Aufruf der Funktion mit zwei Argumenten
console.log(summe);  // Ausgabe: 10

// 5. Funktionen als Werte

let multipliziere = function(x, y)  
{
    return x * y;
};
let produkt = multipliziere(4, 6);  // Aufruf der anonymen Funktion
console.log(produkt);  // Ausgabe: 24

// 6. Pfeilfunktionen (Arrow Functions)

let subtrahiere = (m, n) =>  
{
    return m - n;
};
let differenz = subtrahiere(10, 4);  // Aufruf der Pfeilfunktion
console.log(differenz);  // Ausgabe: 6

// 7. Kurzschreibweise für Pfeilfunktionen

let quadriereKurz = z => z * z;  // Ein Parameter, implizite Rückgabe
let kurzErgebnis = quadriereKurz(7);
console.log(kurzErgebnis);  // Ausgabe: 49

// 8. Funktionen als Parameter (Callback-Funktionen)

function verarbeiteZahl(zahl, funktion)  
{
    return funktion(zahl);
}
let verdoppeln = x => x * 2;
let verarbeiteteZahl = verarbeiteZahl(5, verdoppeln);  // Übergabe der Funktion als Argument
console.log(verarbeiteteZahl);  // Ausgabe: 10

// 9. Selbstaufrufende Funktionen (IIFE - Immediately Invoked Function Expression)

(function()  
{
    console.log("Diese Funktion ruft sich selbst auf!");
})();  // Sofortiger Aufruf der Funktion

// 10. Rekursive Funktionen

function fakultaet(n)  
{
    if (n <= 1)
        return 1;
    else
        return n * fakultaet(n - 1);
}
let fakultaetsErgebnis = fakultaet(5);  // Aufruf der rekursiven Funktion
console.log(fakultaetsErgebnis);  // Ausgabe: 120       