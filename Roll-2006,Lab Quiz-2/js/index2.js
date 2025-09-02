

document.getElementById("generatenumber").addEventListener("click", function(e) {
  e.preventDefault(); 


  let min = parseInt(document.getElementById("fname").value);
  let max = parseInt(document.getElementById("lname").value);


  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  
  document.querySelector("h2").innerHTML = "Generated Number: " + randomNum;
});


document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.querySelector("h2").innerHTML = "Click the button to <br> generate";
});
