const charToMeasure = 'BC'; // The character you want to measure
const fontSize = 13; // The font size in pixels
const fontFamily = 'Arial'; // The font family

// Create a temporary span element for measuring
const measurementElement = document.createElement('span');
measurementElement.style.font = `${fontSize}px ${fontFamily}`;
measurementElement.textContent = charToMeasure;
measurementElement.style.position = 'absolute'; // Ensure the element doesn't affect the layout

// Append the measurement element to the body temporarily
document.body.appendChild(measurementElement);

// Get the actual width of the character
const charWidth = measurementElement.offsetWidth;

// show result of the width
const msgContainer = document.createElement('div');
msgContainer.className="result";
msgContainer.textContent=`the width is ${charWidth}`;
document.body.appendChild(msgContainer);

// Remove the measurement element
document.body.removeChild(measurementElement);

console.log(`The width of '${charToMeasure}' is approximately ${charWidth} pixels.`);
