var username = document.getElementById("password")
var password = document.getElementById("email")
var confirmpassword = document.getElementById("password")
var btn =document.getElementById("login")

btn.addEventListener("click",dispalydown);






function dispalydown(){
    const abc=username.value
    const abc1=password.value
    document.getElementById("username1").innerText=abc
    document.getElementById("password1").innerText=abc1

    if(abc1=="revanthkallakuri@gmail.com" && abc=="1111" )
    {
        alert("Login Successfull")
        window.location.href="./dashboard2.html";
    }
   
   else{
        alert("Invalid Credintails");
    }
}
// Simulate fetching the JSON file
const users = [
    {
      "email": "employee1@example.com",
      "password": "password123",
      "role": "employee"
    },
    {
      "email": "hrmanager@example.com",
      "password": "hrpassword456",
      "role": "hr"
    }
  ];
  
  
