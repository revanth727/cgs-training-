var display = document.getElementById("display");
var buttn = document.getElementsByClassName("btn");

console.log(display);
console.log(buttn);


for(let i=0;i<buttn.length;i++)
{
    buttn[i].addEventListener("click", change);
}


function change(e)
 {
    var s= e.target
    var value=s.innerText;

    if(value =="=")
    {
        var result= eval(display.innerText);
        display.innerHTML=result;

    }
    else{
        display.innerText +=value;
    }
}
console.log(display);