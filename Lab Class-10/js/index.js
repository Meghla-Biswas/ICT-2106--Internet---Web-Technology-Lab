var a = Number(prompt("Enter  a number1: "));
var b = Number(prompt("Enter  a number2: "));
// if (a > 10) document.writeln("A is grather than 10");
// else document.writeln("A is less than or equal to 10");

a > 10
  ? a == 12
    ? document.writeln("A is equal to 12")
    : document.writeln("A is not equal  to 12")
  : document.writeln("A is less than or equal to 10");
// function sub(num1,num2){
//     return num1-num2;
// }
square(a);

function quve(a, a, a) {
  return a * a * a;
}

quve(a, a, a);

function square(a) {
  document.writeln("</br><span style='color:red;'>" + a * a + "</span>");
  document.writeln(
    "</br><span style='color:red;'>" + quve(a, a, a) + "</span>"
  );
}

function multiplication(a, b) {
  return a * b;
}

function area(a, b) {
  document.writeln("</br>" + " Area: ");
  document.writeln(
    "<span style='color:red;'>" + multiplication(a, b) + "</span>"
  );
}
area(a, b);

//immediatealy  invokeable function(IIFE)
(function square(a) {
  document.writeln("</br><span style='color:red;'>" + a * a + "</span>");
  document.writeln(
    "</br><span style='color:red;'>" + quve(a, a, a) + "</span>"
  );
})(a);

let names = ["Meghla", "Smita", "Sadika"];
names.push("Prity");
document.writeln("</br>" + names);

names.pop(); //alaways last the edelete hoy
document.writeln("</br> After calling pop function: " + names);

document.writeln("</br><span style='color:red;'>" + names + "</span>");

let firstname = new Array();
firstname[0] = "Aaa";
firstname[1] = "Bbb";
document.writeln("</br><span style='color:red;'>" + firstname + "</span>");

var firstArray = new Array(7);
var secondArray = new Array();
firstArray[0] = "Meghla";
firstArray[1] = 12;
firstArray[2] = "Nasrin ";
firstArray[3] = 16;

secondArray[0] = "Sadika";
secondArray[1] = "Mim";
secondArray[2] = "Anika";
secondArray[3] = "Rittika";
//array 4 ta ache eikhane kintu ami 6 ta dis element tai baki 2 ta element missing eikhne eijonno 2 ta coma add hoy  extra, 2nd tay 3 ta beshi disi tai extra 3 ta coma add hobe
document.writeln("</br> concat two array: " + firstArray.concat(secondArray));

document.writeln("</br>" + " Withoutcoma");
//coma dur korte loop use kora hoy
for (let i = 0; i < 4; i++) {
  document.writeln("</br>");
  document.writeln(firstArray[i]);
}

for (let i = 0; i < 4; i++) {
  document.writeln("</br>");
  document.writeln(secondArray[i]);
}

firstArray.shift(); //first theke delete kore ekta
document.writeln("</br>shift: " + firstArray);

firstArray.unshift("Topper"); //first e  add kora
document.writeln("</br> Unshift: " + firstArray);

secondArray.splice(0, 3); //first ta index nbr joto theke dlt korbo ,r second ta kotogula element hobe sei indexsoho er pore theke
document.writeln("</br>" + secondArray);

firstArray.splice(3, 0, "gdhggfgffffffff"); //2nd mane kicu dlt hobe na just add hobe 3 nbr index e
document.writeln("</br>" + firstArray);

firstArray.splice(1, 1, "AAAAAA");
document.writeln("</br>" + firstArray);

firstArray.splice(1, 0, "Ayyyy");
document.writeln("</br>" + firstArray);

var ThirdArray = new Array();
ThirdArray[0] = "Omio";
ThirdArray[1] = "Ovro";
ThirdArray[2] = "Kabita";
ThirdArray[3] = "Shuvo";
ThirdArray.splice(1, 2, "Biswas");
document.writeln("</br>" + ThirdArray);

//sorting nmber
let num1 = [1234, 56, 75, 89, 90];
let num2 = [1, 5, 7, 8, 0];
let num3 = [1234, 56, 75, 89, 90];
num3.sort(function (a, b) {
  //evabe korle sort kora jjay boro num,nahole hoy na
  return a - b; //positive num asle swpa kore tokhn b choto age jay
});
// num2.sort();
num2.reverse();
num1.sort();

document.writeln("</br>" + num1);
document.writeln("</br>" + num2);
document.writeln("</br>" + num3);

document.writeln("</br>");
var array2D = [
  [1, "A", 8],
  [2, "B", 3],
  [3, "C", 9],
  [4, "D", 7],
];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    document.writeln(array2D[i][j]);
  }
  document.writeln("</br>");
}
var digit = prompt("Enter the Number: ");
digit = parseInt(digit);
var t = parseInt(digit / 10);
switch (t) {
  case 9:
    document.write("<br/> A+");
    break;
  case 7:
    document.write("<br/>A-");
    break;
  case 6:
    document.write("<br/>B+");
    break;
  case 5:
    document.writeln("</br> B-");
    break;
  default:
    document.write("<br/>Invalid");
}

// function substraction(a,b){
//   return a-b;
// }
// substraction(a,b);

//IFFES function
 function substraction(a, b) {
    return a - b;
  }
(function SubAnswer(a, b) {
 
  document.writeln(
    "</br> <span style='color:red;'>" + substraction(a, b) + "</span>"
  );
})(a,b); // এখানে 10 আর 4 হচ্ছে a, b এর মান

var scores = [5, 7, 3, 4, 8];

function findHigh(scores){
  var high = scores[0];
  for(let i=0; i<5; i++){
    if(high < scores[i])
      high = scores[i];
  }
  return high;
}
document.writeln("</br>");
document.writeln(findHigh(scores));

var student1 = {
    name : "Mehrin Anannya",
    roll : 12345,
    year : "1st",
    courses : ["Operating System", "Data Structure", "Algorithm"],
}
var student2 = {
    name : "Rahim",
    roll : 6789,
    year : "2nd",
    courses : ["Operating System", "Data Structure", "Algorithm"]
}
document.writeln("</br>"+student1.courses);
document.writeln("</br>"+student2.name);

