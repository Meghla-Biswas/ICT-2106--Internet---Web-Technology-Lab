
var student1 = {
  name: "Meghla",
  roll: 2006,
  year: "1st",
  courses: ["IWT", "DLD", "DSA"],
};

var student2 = {
  name: "Smita",
  roll: 2007,
  year: "2nd",
  courses: ["Numeric", "DC", "EDC"],
};


document.writeln(
  "Name: " + student1.name + "  Roll: " + student1.roll + "  Year: " + student1.year + " Courses: " + student1.courses + "<br>"
);
document.writeln(
  "Name: " + student2.name + "  Roll: " + student2.roll + "  Year: " + student2.year + "  Courses: " + student2.courses + "<br>"
);

// Constructor Function
function Student(name, age, roll, year, courses) {
  this.name = name;
  this.age = age;
  this.roll = roll;
  this.year = year;
  this.courses = courses;

  this.display = function () {
    document.writeln("<br>Name: " + this.name +"<br>Age: " + this.age +"<br>Roll: " + this.roll + "<br>Year: " + this.year + "<br>Courses: " + this.courses);
  };
}

var std = new Student("Megh", 22, 2006, "2nd", ["DLD", "IWT"]);
std.display();
document.writeln("<br>The student has taken <span style='color:red;'>" + std.courses[1] + "</span> in this semester<br>");

// Math Functions
// document.writeln("<br>Math.sqrt(2): " + Math.sqrt(2));
// document.writeln("<br>Math.sin(0): " + Math.sin(0));
// document.writeln("<br>Math.pow(2, 16): " + Math.pow(2, 16));
// document.writeln("<br>Math.ceil(-2.89): " + Math.ceil(-2.89));
// document.writeln("<br>Math.ceil(2.12): " + Math.ceil(2.12));
// document.writeln("<br>Math.max(12, 45, 2, 45): " + Math.max(12, 45, 2, 45));
// document.writeln("<br>Math.round(3.72): " + Math.round(3.72));
// document.writeln("<br>Math.random(): " + Math.random());
// document.writeln("<br>Math.random() * 8: " + Math.random() * 8);
// document.writeln("<br>Math.floor(Math.random() * 8): " + Math.floor(Math.random() * 8));
// document.writeln("<br>Math.floor(Math.random() * 8 + 1): " + Math.floor(Math.random() * 8 + 1));

// Date Functions
// var date = new Date();
// document.writeln("<br>Year: " + date.getFullYear());
// document.writeln("<br>Timezone Offset: " + date.getTimezoneOffset());
// document.writeln("<br>Time in ms: " + date.getTime());
// document.writeln("<br>Hour: " + date.getHours());
// document.writeln("<br>Day: " + date.getDay());

// var t = new Date("2020-10-03");
// document.writeln("<br>Day of 2020-10-03: " + t.getDay());

// DOM Manipulation
var header1 = document.getElementById("header1");
document.writeln("<br><span style='color:red;'>" + header1.innerText + "</span>");
header1.innerHTML = "Hello World";
document.writeln("<br><span style='color:red;'>" + header1.innerText + "</span>");

// Working with <h3>
var h3Tags = document.getElementsByTagName("h3");
for (var i = 0; i < h3Tags.length; i++) {
  document.writeln("<br>" + h3Tags[i].innerHTML);
}
h3Tags[0].innerHTML = "I hate u";


var pTags = document.getElementsByTagName("p");
for (var i = 0; i < pTags.length; i++) {
  pTags[i].innerHTML = "<span style='color:red;'>" + pTags[i].innerHTML + "</span>";
}

// Another Student Constructor
// function Stud(name, age, roll) {
//   this.name = name;
//   this.age = age;
//   this.roll = roll;

//   this.display = function () {
//     document.writeln("<span style='color:green;'><br>Name: " + this.name + "<br>Age: " + this.age + "<br>Roll: " + this.roll + "</span>");
//   };
// }

var std1 = new Stud("Meghla", 22, 2006);
var std2 = new Stud("Smita", 21, 2007);
var std3 = new Stud("Tanji", 22, 2005);

var totalStd = [std1, std2, std3];
for (var i = 0; i < totalStd.length; i++) {
  totalStd[i].display();
}

// querySelector Examples
var text2 = document.querySelector('.header2');
document.writeln("<br>" + text2.innerText);

var text3 = document.querySelectorAll('.header2')[1];
document.writeln("<br>" + text3.innerText);

var myDivLink = document.querySelector('.my-div a');
myDivLink.innerHTML = "NewContact";

document.querySelector('p a').innerHTML = "Cold coffee";
document.querySelector('.header3 a').innerHTML = "Milk tea";
