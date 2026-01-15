
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsrumpf | (call)
// test();

 // Funktionsrumpf | (callee)
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Tarik!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
ausgabeNamen()

//Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in Vegas ...
    let firstName ="Tarik";
    console.log("Hallo, " + firstName  + "!");
}

// console.log(firstName); // Fehler: Scope
