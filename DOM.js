
// 1. getElementById(id): 
// This method allows you to retrieve an element from the DOM by its unique ID attribute.
const element = document.getElementById('myElementId');


// 2. querySelector(selector): 
// This method allows you to select an element using a CSS selector.
const element = document.getElementById('myElementId');

//3. innerHTML: 
// This property allows you to set or get the HTML content of an element.
const element = document.getElementById('myElementId');
element.innerHTML = '<p>New content</p>';


// 4. textContent: 
// This property allows you to set or get the text content of an element.
const element = document.getElementById('myElementId');
element.textContent = 'New text content';

// 5. addEventListener(event, callback): 
// This method allows you to attach an event listener to an element, which executes a specified callback function when the specified event occurs on that element.
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked');
});

// 6. setAttribute(attribute, value): 
// This method allows you to set an attribute of an element to a specified value.
const image = document.getElementById('myImage');
image.setAttribute('src', 'new_image.jpg');


// 7. classList: 
// This property provides an interface to manipulate the class attribute of an element.
const element = document.getElementById('myElementId');
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('active'); // add element's class if it's not present, removed it if it's exist.




