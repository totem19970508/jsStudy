var x = 10;
var y = 20;
// var answerElement  = document.getElementById("answer");
// answerElement.innerHTML = x + y;

document.getElementById("answer").innerHTML = 2*x + 3*y + "  This is a test";

var elementsWithClass = document.getElementsByClassName("box");
var box00 = elementsWithClass[0];
var box01 = elementsWithClass[1];
var box02 = elementsWithClass[2];
box00.textContent = "This is line one";
box01.textContent = "This is line one";
box02.textContent = "This is line one";
