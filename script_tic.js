let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let finish = document.querySelector(".gameHide");
let cnt=0;

let turnO = true; //playerO
const winsPtrn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        cnt++;
        if(cnt==9){
            msg.innerText = "Game is TIE";
            msgContainer.classList.remove("hide");
        }
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWhether();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    cnt=0;
    // finish.classList.remove(".hide");
};

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations to player-${winner}!`;
    msgContainer.classList.remove("hide");
    // finish.classList.add(".hide");
    disableBoxes();
};

const checkWhether = () => {
    let cnt = 0;
    for(let pattern of winsPtrn){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos3 === pos2){
                // console.log("Winner is player", pos1);
                // finish.classList.add(".hide");
                showWinner(pos1);
                
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);