// document.getElementById("generatenumber").addEventListener("click", function(e) {
//   e.preventDefault(); 

//   let text = document.getElementById("fname").value; 
//   let count = 0;


//   for (let i = 0; i < text.length; i++) {
//     let ch = text[i];
//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
//         ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
//       count++;
//     }
//   }

//   document.getElementById("output").innerHTML = "There are " + count + " vowels in the sentence.";
// });

// document.getElementById("reset").addEventListener("click", function() {
//   document.getElementById("fname").value = "";
//   document.getElementById("output").innerHTML = "Output will show here...";
// });
// Ask user for input
let sentence = prompt("Enter a sentence:");

// Convert input to lowercase
let str = sentence.toLowerCase();

// Define vowels
let vowels = "aeiou";
let count = 0;

// Count vowels
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

// Show output
alert("There are " + count + " vowels in the sentence.");
console.log("There are " + count + " vowels in the sentence.");
document.writeln("</br>There are " + count + " vowels in the sentence.")
