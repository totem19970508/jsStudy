function square(num) {
    return  num*num;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(function(num, index, array){
    array[index] = square(num);
});


var msgContainer = document.createElement("div");
msgContainer.className = "result";
msgContainer.textContent = "Result : " + nums.join(". ");
document.body.appendChild(msgContainer);

var msgContainer = document.createElement("div");
msgContainer.textContent = "Result : " + nums.join(". ");
document.body.appendChild(msgContainer);

// function square(num) {
//     return num * num;
// }

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var squaredNums = nums.map(square);  // Use the map function to create a new array with squared values

// var msgContainer = document.createElement("div");
// msgContainer.className = "result";
// msgContainer.textContent = "Result: " + squaredNums.join(", ");
// document.body.appendChild(msgContainer);