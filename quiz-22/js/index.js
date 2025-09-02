
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("myImage");

// image toggle on click
imgElement.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
});


document.getElementById("replaceBtn").addEventListener("click", function () {

  images.shift();


  images.push("images/newImage.jpg");

 
  currentIndex = 0;
  imgElement.src = images[currentIndex];
});
