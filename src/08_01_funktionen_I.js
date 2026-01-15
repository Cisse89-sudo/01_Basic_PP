
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// halloKlasse();
  
// Funktionsrumpf | (callee)    
// Funktionsdeklaration
function halloKlasse()
{
    console.log("Hallo Klasse!");
}

// Warum geht das in JVS?
// executable context: der Compiler geht
// den gesamten Code durch
// und legt für jede Funktion einen eigenen Kontext an
// und speichert die Funktion im Speicher ab!

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
ausgabeNamen();

// Funktionalität
function ausgabeNamen() {
    let name1 = "Klasse 01"; // lokale Variable, interne Variable
    let name2 = "Klasse 02";
    let name3 = "Klasse 03";

    // console.log(`Hallo ${name1} !`);
    // console.log(`Hallo ${name2} !`);
    // console.log(`Hallo ${name3} !`);
}

 console.log(ausgabeNamen(name1));

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

/**
 * Funktion mit Parametern (Platzhaltern)
 * Die Werte werden von AUSSEN beim Aufruf übergeben.
 */
// function ausgabeNamenEx(name1, name2, name3) {
//     console.log("Hallo " + name1 + " !");
//     console.log("Hallo " + name2 + " !");
//     console.log("Hallo " + name3 + " !");
// }

// Aufruf (Call) mit Argumenten
// ausgabeNamenEx("Klasse 01", "Klasse 02", "Klasse 03");