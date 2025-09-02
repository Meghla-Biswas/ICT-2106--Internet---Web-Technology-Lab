function paraclick(){
    var para=document.getElementById('paraClass');
    para.innerHTML='This is meghla';
}

function image(){
    var img=document.querySelector('#imgID');
    img.src='picture/ocan.jpg';
}

var pic=['picture/mountain.jpg','picture/ocan.jpg','picture/sunrise.jpg'];
var index=0;

function showimg(){
    document.getElementById('imgmoreID').src=pic[index];
}
function prev(){
    if(index>0){
        index--;
        showimg();
    }
    else{
        alert('This is the first img');
    }
}

function after(){
     if(index<pic.length-1){
        index++;
        showimg();
    }
    else{
        alert('This is the last img');
    }
}
showimg();

function add(){
stylepara.classList.add('stylepara');
}

function remove(){
   stylepara.classList.remove('stylepara'); 
}
function next(){
    location.href="tamplates/next111.html";
}
function back(){
    location.href="../index111.html";
}