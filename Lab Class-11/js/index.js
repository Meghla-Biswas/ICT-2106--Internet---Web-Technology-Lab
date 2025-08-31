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
  "Name: " +student1.name + " " + "Roll: " + student1.roll + " " + student1.year + " " +
    student1.courses
);
ddocument.writeln(
  "Name: " +student2.name + " " + "Roll: " + student2.roll + " " + student2.year + " " +
    student1.courses
);

//constructor
function Student(name, age, roll, year, courses) {
  this.name = name;
  this.age = age;
  this.roll = roll;
  this.year = year;
  this.courses = courses;

  this.display = function () {
    document.writeln("</br>" + "</br>" +"Name: " +this.name +" " +"</br>" +"Age: " +this.age +  " " + "</br>" + "Roll: " + this.roll + " " + "</br>" + "Year: " + this.year +" " +
        "</br>" +
        "courses: " +
        this.courses
    );
  };
}
var std = new Student("Megh", 22, 2006, "2nd", ["DLD", "IWT"]);
std.display();
document.writeln(
  "</br>" +
    "The student has taken " +
    "<span style='color:red;'>" +
    std.courses[1] +
    "</span>" +
    " in this semester"
);

// Math Function
Math.sqrt(2);
document.writeln("</br>" + Math.sqrt(2));

Math.sin(0);
document.writeln("</br>" + Math.sin(0));
Math.pow(2, 16);
document.writeln("</br>" + Math.pow(2, 16));
Math.ceil(2.89);
document.writeln("</br>" + Math.ceil(-2.89));
document.writeln("</br>" + Math.ceil(2.12));
document.writeln("</br>" + Math.max(12, 45, 2, 45));
document.writeln("</br>" + Math.round(3.72));
document.writeln("</br>" + Math.random());
document.writeln("</br>" + Math.random() * 8);
document.writeln("</br>" + Math.floor(Math.random() * 8));
document.writeln("</br>" + Math.floor(Math.random() * 8 + 1));

var date = new Date();
document.writeln("</br>" + date.getFullYear());
document.writeln("</br>" + date.getTimezoneOffset());
document.writeln("</br>" + date.getTime());
document.writeln("</br>"+date.getHours());
document.writeln("</br>"+date.getDay());
var t=new Date("2020-10-03");
document.writeln("</br>"+t.getDay());

//DOM(Document Object Model)
//getelement by ID

var text=document.getElementById("header1").innerText;
document.writeln("</br>"+ "<span style='color:red;'>"+text+"</span>");
// document.writeln("</br>"+document.getElementById("header1").innerHTML);


var text=document.getElementById("header1");
text.innerHTML="Hello World";//innertext chara abr var declear kore then innerHtml er udat ekore dile html pager er lekha update hoye jay upore
var text=document.getElementById("header1").innerText;//ekbar ager ta override korle then print kore nicheu hello world
document.writeln("</br>"+ "<span style='color:red;'>"+text+"</span>");

// var t=document.getElementsByClassName("head").innerText;
// document.writeln("</br>"+document.getElementsByClassName("head").innerHTML);
// var t=document.getElementsByClassName("head");
// t.innerHTML="<span style='color:red;font-size=5px;margin=20px;background-color:green;'>My name is Meghla</span>";
// var t=document.getElementById("head").innerText;
// document.writeln("</br>"+document.getElementById("head").innerHTML);

var text1= document.getElementsByTagName("h3");
for (var i=0;i<text1.length;i++)
document.writeln("</br>"+text1[i].innerHTML);
text1[0].innerHTML="i hate u";



var student=document.getElementsByTagName("p");
    for (var i = 0; i < student.length; i++) {
    student[i].innerHTML = "<span style='color:red;'>" + student[i].innerHTML + "</span>";

}

function Stud(name, age, roll) {
  this.name = name;
  this.age = age;
  this.roll = roll;

  this.display = function () {
    document.writeln(
    "<span style='color:green;'>"+
      "</br>" +
        "</br>" +
        "Name: " +
        this.name +
        "</br>" +
        "Age: " +
        this.age +
        "</br>" +
        "Roll: " +
        this.roll+"</span>"
    );
  };
}

var std1 = new Stud("Meghla", 22, 2006);
var std2 = new Stud("Smita", 21, 2007);
var std3 = new Stud("Tanji", 22, 2005);

var totalstd = [std1, std2, std3];

for (var i = 0; i < totalstd.length; i++) {
  totalstd[i].display(); 
}

 var  text2=document.querySelector('.header2');//for class
 document.writeln("</br>"+ text2.innerText);

  var  text2=document.querySelectorAll('.header2')[1];//for selectin alelements like rray
 document.writeln("</br>"+ text2.innerText);

var text4=document.querySelector('.my-div a').innerHTML="NewContact";//contact newcontact diye replace hoice
document.querySelector( ' p a').innerHTML="Cold coffee";
document.querySelector( '.header3 li p a').innerHTML="Milk tea";

