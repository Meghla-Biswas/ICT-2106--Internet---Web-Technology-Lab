function addstyle(){
    var paraID=document.querySelector('#paraID');
    paraID.style.color="blue";
    paraID.style.fontSize="3rem";
     paraID.style.fontWeight="bold";
      paraID.style.fontStyle="italic";

}

function deletebutton(){
    var para=document.querySelector('#paraID');
    para.style=" ";
}


// better apporach eijonno add, delete e same name dite hoy karon ekta kono var create kori  nai
function addstyle(){
    paraID.classList.add("para-style");

}
function deletebutton(){
    // paraID.classList=" ";
     paraID.classList.remove("para-style");//eivabeu kaj kore remove
}

function next(){
    location.href="templates/next.html";
}
function back(){
    location.href="../index.html";//temlates er baire index.html tai path khuje pacche na . eijono age ../ dite ,tahole root e eshe access kore
}

// AddEvent listeners eta korar somoy sob off kora lage karon eta ekta button e jonno kaj kore
 var button=document.querySelector("button");
button.addEventListener("click",addstyle );


function addstyle(){
   var paraID= document.querySelector("#paraID");
   paraID.classList.add("para-style");
paraID.classList.toggle("para-style");
// eikahne toggol dile ektay e add remove er kja
}


var button1=document.querySelector("#deletbtn");
button1.addEventListener("click",deletebutton);
function deletebutton(){
    var deletebutton2=document.querySelector("#paraID");
    deletebutton2.classList=" ";
}

var button=document.querySelector("#addButton");
button.addEventListener("click", function(a,b){
    var paraID=document.querySelector("#paraID");
    paraID.innerHTML=(a+b)}(1,3));
    // parapragh ta change korbe
//3 ta button niye kaj korbo, we can use loop(parctice)


// const names=['Meghla','Biswas','Smita'];
// //for of diye kaj

// for(let a of names ){
//     document.writeln(a+" ,");//last e coma na caile loop diye korbo
// }
// //for in loop
// let person={
//     id:1,
//     name:'mefgka',
//     prefossion:'student'

// }
// for(let x in person){
//     document.writeln("</br>"+ x+" : "+person[x]);
// }

// //for each loop

// document.writeln(   "</br> for each loop use: <br/>");
// var numbers=[1,5,6,7,8];

// //  function myfunction(x){
// //     document.writeln(x+"</br>");
// //  }
// numbers.forEach(function(x){
//        document.writeln(x+"</br>");
// });

// //arrow function

// const display=()=> {
//     return "</br> Hello with return arrow function.";
// }
// document.writeln(display());
// add=(a,b)=> document.writeln("Add: " + (a+b), "Sub: "+(a-b))
// add(1,2);

//map e kaj with arrow function
//lecture 10,dom Object,try,catch,jSOn data eisob pore nibo,github er 9 js porjonto porbo cone kore namabo
