function compare(num1, num2) {
  console.log(num1,"-" , num2,"=",num1-num2);
  return num1 - num2;
}

var nums= [3,1,2,100, 4,200,12.4,56.1,10.8];

nums.sort(compare)
console.log(nums)

// Display the sorted array in the browser


var resultContainer = document.createElement("div");
resultContainer.className = "result";
resultContainer.textContent = "Sorted Array: " + nums.join(", ");
document.body.appendChild(resultContainer);


var resultMessage = document.createElement("p")
resultMessage.style.backgroundColor="blue";
resultMessage.style.padding = "15px"
resultMessage.style.color = "yellow"
resultMessage.style.width = "700px"
resultMessage.style.borderRadius = "10px"
resultMessage.style.fontStyle = "italic"
resultMessage.style.fontSize = "30px"
resultMessage.style.textAlign = "Left";
resultMessage.textContent = "This is the result: " + nums.join(", ");

document.body.appendChild(resultMessage);

// let resultMessage = document.createElement("div");
// resultMessage.innerHTML = "<strong>Sorted Array; </strong>" + nums.join(", ");