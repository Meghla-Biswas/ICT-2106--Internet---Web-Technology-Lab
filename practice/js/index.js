// alert('hello from external');
// var x=45;
// var y=70;
// console.log(x+y);
// document.writeln(x+y);
// alert(x+y);

// conversion
// let a = "Meghka";
// let b = 23;
// document.writeln(typeof a);
// document.writeln(typeof b);
// let s = b.toString();
// document.writeln(s);
// document.writeln(typeof s);
// let u = "456";
// let v = parseInt(u);
// document.writeln(v);
// document.writeln(typeof v);
// let o = parseFloat(u);
// document.writeln(o);
// document.writeln(typeof o);
// document.writeln("</br>" + Number("78987"));
// let z = 120.8567;
// document.writeln("</br>" + z.toFixed(3));
// document.writeln("</br>" + z.toPrecision(4));

// //write name
// let firstName = prompt("Enter your first name:") || "";
// let lastName = prompt("Enter your last name:") || "";
// document.writeln("<br>" + firstName + " " + lastName);

// //take number input

// let num1 = prompt("enter first number");
// let num2 = prompt("enter second number");
// num1 = Number(num1);
// num2 = Number(num2);

// let sum = num1 + num2;
// sub = num1 - num2;
// mul = num1 * num2;
// div = num1 % num2;
// mod = num1 / num2;
// let length=prompt("Enter the length");
// let width=prompt("Enter the width");
// let circulararea=Number(length)+Number(width);
// tempFahrenheit=Number(tempFahrenheit);
// let celcius=(tempFahrenheit-32)*5/9;
// let tempcelcius=prompt("enter the value of celcius: ");
// tempcelcius=Number(tempcelcius);
// let farenheit=(tempcelcius*9/5)+32;
// document.writeln("<br>" +
//   num1 +
//     "+" +
//     num2 +
//     "=" +
//     sum +
//     "<br>" +
//     num1 +
//     "-" +
//     num2 +
//     "=" +
//     sub +
//     "<br>" +
//     num1 +
//     "*" +
//     num2 +
//     "=" +
//     mul +
//     "<br>" +
//     num1 +
//     "/" +
//     num2 +
//     "=" +
//     div +
//     "<br>" +
//     num1 +
//     "%" +
//     num2 +
//     "=" +
//     mod+"<br>" + "area:"+
//     circulararea+"</br>"+"calcius: "+ celcius +"</br>" +"Farenheit: "+ farenheit
// );

// let a=Number(prompt("Enter a"));
// let b=Number(prompt("Enter b"));

//  function multiplication(a,b){
//     return a*b;
//  }
// function quove(a){
//     return a*a*a;
// }

//IIEF
//  (function valuess(a,b){
//     document.writeln("</br>"+ a*a);
//    document.writeln("</br> <span style='color:red;'>" +quove(a) +"</span>");
//       document.writeln("</br>"+ "Area: ");
//             document.writeln("</br>"+ a*b);
//  })(a,b);

//  valuess(a,b);


//array

// var firstArray=new Array();
// var secondArray=new Array();
// firstArray[0] = "Meghla";
// firstArray[1] = 12;
// firstArray[2] = "Nasrin ";
// firstArray[3] = 16;

// secondArray[0] = "Sadika";
// secondArray[1] = "Mim";
// secondArray[2] = "Anika";
// secondArray[3] = "Rittika";
// document.writeln("</br> concat two array:<span style='color:blue;'> "+firstArray.concat(secondArray)+"</span>");
// document.writeln("</br>" + " Withoutcoma");
// //coma dur korte loop use kora hoy
// for (let i = 0; i < 4; i++) {
//   document.writeln("</br>");
//   document.writeln(firstArray[i]);
// }

// firstArray.shift();
//  document.writeln(firstArray);
//  firstArray.shift();
//  document.writeln(firstArray);

//  var ThirdArray = new Array();
// ThirdArray[0] = "Omio";
// ThirdArray[1] = "Ovro";
// ThirdArray[2] = "Kabita";
// ThirdArray[3] = "Shuvo";
// ThirdArray.splice(1, 2, "Biswas");
// document.writeln("</br>" + ThirdArray);

// var num33=[2364,6875,90,67];
// num33.sort (function(a,b){
//     return a-b;
// });
// document.writeln("</br>" + num33);

// var student1={
//     name:"Meghla",
//     age:23,
//     coruse:["DLD","DS"],
// };
// document.writeln("<span style='color:red;'>"+
//   "Name: " +
//     student1.name +
//     " " +
//     student1.coruse+"</span>"
// );

// function Student(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course;

//     this.display = function() {
//         document.writeln(
//             "<span style='color:red;'>" +
//             "Name: " + this.name +
//             " " +
//             this.course +
//             "</span>"
//         );
//     };
// }

// var std = new Student("meghla", 23, "Dld");

// std.display();

// document.writeln(
//   "</br>" +
//     "The student has taken " +
//     "<span style='color:red;'>" +
//     std.course +
//     "</span>" +
//     " in this semester"
// );

// var num55=document.getElementById("header1").innerText;
// document.writeln("</br>" +num55);
// var num55=document.getElementById("header1");
// num55. innerHTML= "<span style='color:red;'>" +"My name is mehla"+    "</span>";
// // document.writeln("</br>" +num55);
// var num55=document.getElementById("header1").innerText;
// document.writeln("</br>" +num55);


function paraclick(){
    var text=document.querySelector('#paraID');
    text.innerHTML="This is meeeeeeeeee";

}

function imageClick(){
    var text55=document.getElementById('imageID');
    text55.src='picture/ocan.jpg';
}

var images=['picture/ocan.jpg','picture/sunrise.jpg','picture/mountain.jpg'];
var index=0;

function showimage(){
    document.getElementById('imageSlider').src=images[index];
}

function prev(){
    if(index>0){
        index--;
        showimage();
    }
    else{
        alert("This is the first image");
    }
}

function next(){
    if(index<images.length-1){
        index++;
        showimage();

    }
    else{
        alert("This is the last  image");
    }
}

showimage();

// function addstyle(){
//     var text56=document.getElementById('stylepara');
//     text56.style.color="green";
//   text56.style.fontStyle="italic";
//     text56.style.fontSize="2rem";
//      text56.style.fontWeight="bold";
    
// }
// function deletebutton(){
//     var text=document.getElementById('stylepara');
//     text.style=" ";
// }

function addstyle(){
stylepara.classList.add('para-style');
}

function deletebutton(){
stylepara.classList.remove('para-style');
}

function nextpage(){
    location.href="tamplates/next.html";
}

function backpage(){
    location.href="../index1.html";
}