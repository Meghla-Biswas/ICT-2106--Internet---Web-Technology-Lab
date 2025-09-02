// Add style function
function addStyle() {
  var para = document.querySelector("#paraID");
  para.classList.add("para-style");
}

// Remove style function
function deleteStyle() {
  var para = document.querySelector("#paraID");
  para.classList.remove("para-style");
}

// Next page function
function next() {
  location.href = "templates/next.html";
}

// Event listeners
document.querySelector("#addButton").addEventListener("click", addStyle);
document.querySelector("#deleteButton").addEventListener("click", deleteStyle);
document.querySelector("#nextButton").addEventListener("click", next);

// Loops & Arrow functions examples
const names = ['Meghla','Biswas','Smita'];
for(let a of names){
  document.writeln(a + " ,");
}

let person = { id:1, name:'mefgka', profession:'student' };
for(let x in person){
  document.writeln("<br>" + x + " : " + person[x]);
}

var numbers=[1,5,6,7,8];
document.writeln("<br><br>forEach loop:<br>");
numbers.forEach(x => document.writeln(x + "<br>"));

const display = () => "<br>Hello with return arrow function.<br>";
document.writeln(display());

const add = (a,b) => {
  document.writeln("Add: " + (a+b) + "<br>");
  document.writeln("Sub: " + (a-b) + "<br>");
}
add(1,2);

const squared = numbers.map(n => n*n);
document.writeln("<br>Squared Numbers: " + squared);
let paraDoc = document.querySelectorAll(".paraId");
document.querySelector(".paraId").
    addEventListener("click", function(){
        for(i = 0; i < paraDoc.length; i++)
        paraDoc[i].className = "textStyle";
        //document.querySelectorAll(".paraId")[i].innerHTML = "new";
    });