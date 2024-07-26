// Import jQuery and debounce from Lodash
import $ from "jquery";
import debounce from "lodash/debounce";

// Initialize a counter
let clickCount = 0;

// Function to update the counter and display it
function updateCounter() {
  clickCount += 1; // Increment the counter
  $("#count").text(`${clickCount} clicks on the button`); // Update the paragraph content
}

// Function to add elements to the body
function addElements() {
  // Append a paragraph element: "Holberton Dashboard"
  $("body").append("<p>Holberton Dashboard</p>");

  // Append a paragraph element: "Dashboard data for the students"
  $("body").append("<p>Dashboard data for the students</p>");

  // Append a button element with the text "Click here to get started"
  const $button = $("<button>Click here to get started</button>");
  $("body").append($button);

  // Append a paragraph element with id 'count'
  $("body").append('<p id="count"></p>');

  // Append another paragraph: "Copyright - Holberton School"
  $("body").append("<p>Copyright - Holberton School</p>");

  // Bind the debounced updateCounter function to the button click event
  $button.on("click", debounce(updateCounter, 300));
}

// Execute the function when the DOM is ready
$(document).ready(addElements);
