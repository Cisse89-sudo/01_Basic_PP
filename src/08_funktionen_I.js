
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
// ausgabeNamen()

//Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in Vegas ...
    let firstName ="Tarik";
    console.log("Hallo, " + firstName  + "!");
}

// console.log(firstName); // Fehler: Scope

// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2();
// ausgabeNamen2("Yasin") // Argumente --> Daten für Parameter
// ausgabeNamen2("Tarik") // ausgabeNamen2("Sandra")

function ausgabeNamen2(firstName) {
    console.log("Hallo, " + firstName  + "!");
    }

    /***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamen3();
// ausgabeNamen3("Mad", "Max");

// Argumente werden von prompt() geliefert --> Input
// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));

function ausgabeNamen3(firstName, familyName) {  // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Mad", "Max");


function ausgabeNamenSRP(firstName, familyName) {  // Parameter

     //1st responsibility: string composing
     const GAP =" ";
     let outputStr = ("Hallo, " + firstName + GAP + familyName + "!");

     //2nd responsibility: string output
    console.log(outputStr);
    


}

/***** Funktionen 03b *****/
// 03b Verantwortlichkeiten in getrennte Funktionen auslagern

 //1st responsibility: string composing
output(getString("Mad", "Max"));


function getString(firstName, familyName) {

    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"
    output("test");
    return outputStr; // Fkt.- OUTPUT sendet Daten zum Call
    output("hi"); // Abruch nach return
}


//2nd responsibility: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
   console.log(outputData)
}

