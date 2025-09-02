
let sentence = prompt("Enter a sentence:");


let str = sentence.toLowerCase();


let vowels = "aeiou";
let count = 0;

// Count vowels
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}


alert("There are " + count + " vowels in the sentence.");
console.log("There are " + count + " vowels in the sentence.");
document.writeln("</br>There are " + count + " vowels in the sentence.")
