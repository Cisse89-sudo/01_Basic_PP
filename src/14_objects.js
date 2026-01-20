/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstname: "Yasin",
                lastname: "Warsame",
                salary: [120000, 160000],
                permission: true,
                sayHello: function(){return "Hallo"},
                sayHello2: function () {
                    return "Hallo, ich bin " + this.firstname;
                }



};


output(person);
output("---------------");
output(person.firstname);
output(person.lastname);
output("---------------")
output(person.salary[1]);
for (let i = 0; i < person.salary.length; i++) {
    output(person.salary[i]);
}
output("---------------");
output(person.permission);

output("---------------");
const txt = person.sayHello() + ", ich bin " + person.firstname +
            " und verdiene " + person.salary[1] + " p.a";
output(txt)
output("------------------")

const txt2 = person.sayHello2() + " und verdiene " + person.salary[1] + " p.a.";
output(txt2);





// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}