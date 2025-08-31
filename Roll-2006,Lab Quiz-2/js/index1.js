var student = [{
    roll : 2006,
    name : "Meghla Biswas",
     year:"2nd",
    section:"2022-2023",
}
,
{
    roll : 6789,
     name : "Rahim",
    year : "2nd",
       section:"2022-2023",
}
,

{
    roll :1234,
     name : "Smita Biswas",
    year : "2nd",
       section:"2022-2023",
}

]
for(let i = 0; i <student.length; i++) {
    document.writeln("</br><span style='color:red;'>"+"Roll: "+student[i].roll
  +"</br>"+"Name: "+student[i].name+
    "</br>"+"Section: "+student[i].section+
"</br>"+"Year: "+ student[i].year+
"</br>"+"</span>");
}



student.shift();
student.push({    roll :2345,
     name : "kabita Biswas",
    year : "2nd",
       section:"2022-2023",

})

document.writeln("</br><b>"+"New result"+"<br/></b>");

for(let i = 0; i <student.length; i++) {
    document.writeln("</br><span style='color:green;'>"+"Roll: "+student[i].roll
  +"</br>"+"Name: "+student[i].name+
    "</br>"+"Section: "+student[i].section+
"</br>"+"Year: "+ student[i].year+
"</br>"+"</span>");
}


