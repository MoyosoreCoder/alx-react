// Import CSS file to include styles in the bundle
import "./styles.css";

// Simple JavaScript code to test Webpack setup
console.log("Hello, Webpack!");

// Example function to demonstrate functionality
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Webpack"));

// Optional: Example of importing and using an image
import myImage from "./my-image.png";

// Create an image element and set its source
const img = document.createElement("img");
img.src = myImage;
document.body.appendChild(img);
