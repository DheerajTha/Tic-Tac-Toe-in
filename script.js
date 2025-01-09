let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let resetButoon = document.querySelector("#Reset-btn");
let newButton = document.querySelector("#new-btn")

let turnO = true; //playersO ,  playersX'
let count  = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () =>{
  turnO = true;
  enableBox ();
  count = 0;
  msgContainer.classList.add("hide");
}



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    let iswinner = checkWinner();

    count++

    if (count === 9 && !iswinner)
      gameDraw();
      
  });
});

const gameDraw = () =>{
  msg.innerHTML = "Match Draw";
  msgContainer.classList.remove("hide");
  disabledBox ()

}



const disabledBox = () =>{
for (let box of boxes) {
  box.disabled =true;
}
}

const enableBox = () =>{
  for (let box of boxes) {
    box.disabled =false;
    box.innerText ="";
  }
  }

const showWinner = (winner) =>{
    msg.innerHTML = `Congrats ${winner}`;
    msgContainer.classList.remove("hide");
    
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let post1=   boxes[pattern[0]].innerText;
      let post2=   boxes[pattern[1]].innerText;
      let post3=   boxes[pattern[2]].innerText;

      if(post1 != "" && post2 != "" && post3  != ""){
        if(post1 === post2 && post2 === post3){
            showWinner(post1);
            disabledBox ();
        }
        
      } 
      
  }
};



newButton.addEventListener("click", resetGame);
resetButoon.addEventListener("click", resetGame);


// +17578499058 athrm