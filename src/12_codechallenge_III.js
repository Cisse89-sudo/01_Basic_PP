

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
//     const GAP = " ";
//     const PUNCT =getPunct(op);
//     let str = "";
// }
// for (let i = 0; i < arr.length; i++)
//     if (i != arr.length-1) {
//         str += arr[i] + GAP;
//     }else {
//         str += arr[i] + PUNCT;
//     }
     
//    function getSentenceArr2(arr) {

//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";

    // // 1. Iteration: Struktur GENAU erzeugen ...
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length - 1) {
           str += arr[i] + GAP; 
        } else {
            str += arr[i] + PUNCT;
        }
    }
    return str;

    // 2. Iteration: Struktur erzeugen + trimmen()
    // for (let i = 0; i < arr.length; i++) {
    //     str += arr[i] + GAP; 
    // }
    // return str.trim() + PUNCT;

     // 3. Variante: Ausnutzen von generischen Fuktionen ...
    // return arr.join(GAP) + PUNCT;


}





// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}