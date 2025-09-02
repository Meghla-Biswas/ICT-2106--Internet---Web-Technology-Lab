function generateRandom() {
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    document.getElementById("result").innerText = "Please enter valid limits!";
    return;
  }

  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").innerText = "Generated Number: " + randomNum;
}
