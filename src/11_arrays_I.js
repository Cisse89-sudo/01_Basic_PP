
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */
// let arr;
// arr = new Array();
// arr = [];
// arr = [2,11,7,8,10,20];  // Arr. mit Elemente

// console.log(arr);
// console.log(arr.length); // Anzahl der Elemente 
// console.log(arr[0]); // Index 0 (1. Pos. im Array)
// console.log(arr[5]);
// console.log(arr[arr.length-1]);  //letzte Pos. / allgemein

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 20 ; i++) {
//     output("index :" + i);  // i --> Schleifen-Index
// }


// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {  // i --> Schleifen-Index
//      output("index :" + i);
// }


// Inkrement (var. Schrittweite)
for (let i = 10; i <= 100; i += 10) {
   output("index :" + i);   
}





/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","der","coole", "Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 word5 + GAP +
//                 word6 +
//                 PUNCT;

//     return str;
// }




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation: semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//      let str =  arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] +
//                 PUNCT;

//     return str;
// }
