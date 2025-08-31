var a = 10;
var a = 12;
document.writeln(a);
let b = 100;
document.writeln(b);
let c = "Meghla";
let v = 23.445; //let use kora vlo , auto update dekha jay hoy na jehetu
document.writeln(typeof b);
document.writeln(typeof c);
document.writeln(typeof v);

//typecasting
//Num to string
let s = b.toString();
document.writeln(s);

//string to Num

let x = "100";
x = parseInt(x);
document.writeln("</br>" + typeof x);
y = parseFloat(x);
document.writeln("</br>" + typeof y);

//Float to Number,string
let z = 120.8567;
let o = parseInt(z);
document.writeln("</br>" + typeof o);
document.writeln(o);
let t = z.toString();
document.writeln("</br>" + typeof o);

document.writeln("</br>" + Number("Adsssad"));
document.writeln("</br>" + Number("23421653"));

document.writeln("</br>" + z.toFixed(3));

document.writeln("</br>" + z.toPrecision(8));

let num1 = prompt("enter first number");
let num2 = promp("enter second number");
num1 = Number(num1);
num2 = Number(num2);
let sum = num1 + num2,
  sub = num1 - num2,
  mul = num1 * num2,
  div = num1 / num2,
  mod = num1 % num2;

//document.writeln(  num1+"+"+num2+"="+sum+"</br>"+num1+"-"+num2+"="+sub+"</br>"+num1+"*"+num2+"="+mul+"</br>"+num1+"/"+num2+"="+div+"</br>"+num1+"%"+num2+"="+mod+"</br>");
//=== equal dile type o dekhetai strin r num equal hoy na,duitai numn hole hoy,type dekhar jonno !== dite hoy true ashe ,!= dile false ashe
let radious = prompt("Enter the circle radious : ");
radious = Number(radious);
let carea = 2 * 3.1416 * radious * radious;
let length = prompt("Enter the ractangle length : ");
let width = prompt("Enter the ractangle width : ");
let recarea = Number(length) * Number(width);
let tempFahrenheit=prompt("enter the value of farenheit: ");
tempFahrenheit=Number(tempFahrenheit);
let celcius=(tempFahrenheit-32)*5/9;
let tempcelcius=prompt("enter the value of celcius: ");
tempcelcius=Number(tempcelcius);
let farenheit=(tempcelcius*9/5)+32;
document.writeln(
  num1 +
    "+" +
    num2 +
    "=" +
    sum +
    "</br>" +
    num1 +
    "-" +
    num2 +
    "=" +
    sub +
    "</br>" +
    num1 +
    "*" +
    num2 +
    "=" +
    mul +
    "</br>" +
    num1 +
    "/" +
    num2 +
    "=" +
    div +
    "</br>" +
    num1 +
    "%" +
    num2 +
    "=" +
    mod +
    "</br>" +
    "circle are " +
    carea +
    "</br> rectangle area" +
    recarea + "</br>"+"calcius: "+ celcius +"</br>" +"Farenheit: "+ farenheit
);
