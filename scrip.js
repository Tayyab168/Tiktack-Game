let box = document.querySelectorAll(".box");
let wbox=document.querySelector("#winner");
let reset=document.querySelector(".reset_btn");
let winSound = document.getElementById("winSound");
let turn0 = true;

function dashboard() {}
let winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
box.forEach((box_btn) => {
  box_btn.addEventListener("click", function () {
    if (turn0 === true) {
      box_btn.innerHTML = "0";
       
      turn0 = false;
    } else {
      box_btn.innerHTML = "x";
      turn0 = true;
    }
    box_btn.disabled = true;
    Mwinner();
  });
});

 


let Mwinner = () => {
  let p1,p2,p3;
    for (pattern of winner) {
       p1 = box[pattern[0]];
       p2 = box[pattern[1]];
       p3 = box[pattern[2]];
       if (p1.innerText !== "" && p1.innerText === p2.innerText && p2.innerText === p3.innerText) {
        wbox.innerText= "Winner Player is "+p1.innerText+"  ❤👌";
        p1.style.color="red";
        p2.style.color="red";
        p3.style.color="red";
            winSound.play();
    }
    }
    
    return false; 
  };
let restart=()=>{
box.forEach((box_btn)=>{
 
    box_btn.innerHTML="";
    box_btn.disabled=false
})
turn0=true;
}
reset.addEventListener("click",function(){
    restart()
    wbox.innerText="";
})