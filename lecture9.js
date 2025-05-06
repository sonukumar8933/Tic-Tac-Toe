let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turno = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      box.classList.add("o-color");
      turno = false;
    } else {
      box.innerText = "X";
      box.classList.add("x-color");
      turno = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("o-color", "x-color");
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulation , Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val1 = boxes[pattern[0]].innerText;
    let pos2val2 = boxes[pattern[1]].innerText;
    let pos3val3 = boxes[pattern[2]].innerText;

    if (pos1val1 != "" && pos2val2 != "" && pos3val3 != "") {
      if (pos1val1 === pos2val2 && pos2val2 === pos3val3) {
        console.log("Winner", pos1val1);
        showwinner(pos1val1);
      }
    }
  }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
