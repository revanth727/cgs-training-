//document.getElementById(): selects 1 element based on ID
//document.getElementsByTagName(): return an Array of elements
//document.getElementsByClassName(""):return an array of elements
//----------------------
//document.querySelector(#s1):returns a single element
//document.querySelectorAll():(""): returns a list of matching elements 

function inscore1(e) {  
    var score1 = document.getElementById("s1");
    var currentVotes = parseInt(score1.innerText):
    console.log(currentVotes+1)
    score1.innerText = currentVotes+1
}


var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
btn1.addEventListener("click", inscore1);