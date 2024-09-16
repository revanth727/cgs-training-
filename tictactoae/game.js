window.onload = function () {
    var boxes = document.getElementsByClassName("box"); 
    for (const ele of boxes) {
      ele.addEventListener("click", marker);
    }
  
    var player1 = "X";
    var player2 = "O";
    var chance = 1;
    var board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  
    function marker(e) {
      if (e.target.innerText != "") {
        alert("Already Marked");
        return;
      }
  
      if (chance == 1) {
        e.target.innerText = player1;
        chance = 2; 
      } else {
        e.target.innerText = player2;
        chance = 1; 
      }
    }
  };