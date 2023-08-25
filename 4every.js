function isEven(num){
    return num%2 === 0;
}

var nums = [2,4,6,8,10,22,56];
var even =  nums.every(isEven);

var msgEven1 = document.createElement("div");
msgEven1.className = "result";
msgEven1.style.font = "28px Console, sans-serif"
msgEven1.style.color= "red";

var msgEven2 = document.createElement("div");
msgEven2.className = "result";
msgEven2.style.font = "28px Console, sans-serif"
msgEven2.style.color= "red";

if (even){
    msgEven1.textContent = "1 All of the number is Even";
    msgEven1.style.color = "green"
    msgEven2.style.color = "green"
    msgEven2.textContent = "3 All of the number is Even";
    
}else{
    msgEven1.textContent = "1 not all number is Even @";
    msgEven2.textContent = "3 not all number is Even @";
    msgEven1.style.color = "red"
    msgEven2.style.color = "red"
}

document.body.appendChild(msgEven1);
document.body.append(msgEven2)


var printAnswer = document.querySelector(".result");
// printAnswer.textContent = msgEven1

