// Image list (first image deleted, new one added)
let images = [
  "images/mountain.jpg",   // New first image
  "images/bird.jpg",      // Second
  "images/sunrise.jpg",     // Third
  "images/sunset.jpg"      // Fourth
];

let index = 0;
let imgTag = document.getElementById("myImage");

// Show first image
imgTag.src = images[index];

// Add event listener
imgTag.addEventListener("click", function () {
  index++;
  if (index >= images.length) {
    index = 0; // আবার শুরু থেকে
  }
  imgTag.src = images[index];
});
