
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
    // console.log("Hallo Klasse 01 !");
    // console.log("Hallo Klasse 02 !");
    // console.log("Hallo Klasse 03 !");
}   
