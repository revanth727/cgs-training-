var btn1=document.getElementById("btn1");
 var btn2=document.getElementById("btn2");
 var btn3=document.getElementById("btn3");
 var btn4=document.getElementById("btn4");
 
 

function increScore(e)
{

    var button=e.target;
    var sid=button.getAttribute("data-score");
    console.log(sid);
    var score=document.getElementById(sid);
    console.log(score.innerText);
    var currentScore= parseInt(score.innerText);
    score.innerText=currentScore+1;

    // var sc=document.getElementById("inc1");
    // var inc=parseInt(sc.innerText);
    // sc.innerText=inc+1;
}


btn1.addEventListener("click",increScore);
btn2.addEventListener("click",increScore);
btn3.addEventListener("click",increScore);
btn4.addEventListener("click",increScore);




function gameOver()
{
    
    var s1= document.getElementById("inc1").innerText;
    var s2= document.getElementById("inc2").innerText;
    var s3= document.getElementById("inc3").innerText;
    var s4= document.getElementById("inc4").innerText;

    console.log(s1);


    var s11=parseInt(s1);
    var s12=parseInt(s2);
    var s13=parseInt(s3);
    var s14=parseInt(s4);


    console.log(s11);

    if(s11>s12 && s11>s13 && s11>s14)
    {
        console.log(s11+"Winner");
        alert("Janasena Winner");

    }
   else if(s12>s11 && s12>s13 && s12>s14)
        {
            console.log(s12+" Winner");
            alert("TDP Winner")
        }
   else if(s13>s12 && s13>s11 && s13>s14)
       {
           console.log(s13+" Winner");
           alert("Bjp Winner")
       }
    else{

        console.log(s14+"Winner");
        alert("YSRCP Winner")
    }
}

