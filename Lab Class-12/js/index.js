function buttonClick1(){
    alert('Hello');

}
function paraClick(){
var text=document.getElementById('paraID');
// var text=document.querySelector('#paraID'); eta dileu kj korbe override korar
text.innerHTML='This is second text of the para';

}

function paraClick2(){
    var text3=document.querySelector('#paramaker');
    text3.innerHTML='My name is Meghla';
}



function imageClick(){
var text2=document.querySelector('#imageID');
text2.src='images/city.jpg';

}


var images=['images/mountain.jpg',"images/sky.jpg","images/bird.jpg"];
var index=0;

function showimage(){
  document.getElementById('slider').src=images[index];

}

function prev(){
  if(index>0){
    index--;
    showimage();
  }
  else{
    alert('This is the first image');
  }
}


function next(){
  if(index<images.length-1){
    index++;
    showimage();
  }

  else{
    alert("This is the last image");
  }
}

showimage();