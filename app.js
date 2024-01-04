const box = document.querySelectorAll(".box");
const turn = document.querySelector(".turn");
const winner = document.querySelector(".winner");
const resetButton = document.getElementById("resetButton");

let board = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let win = ["012", "345", "678", "036", "147", "258", "048", "246"];

let tries = 0;
let player = 1;
let counter1;
let counter2;

turn.innerHTML = "1 (X)";

box.forEach((element, index) => {
    element.addEventListener("click", () => {
        handleBoxClick(element, index);
    });
});

resetButton.addEventListener("click", () => {
    resetGame();
});

function handleBoxClick(element, index) {
    insertMark(element, index);
}

function insertMark(event, i) {
  console.log(`player: ${player}`)
    if (player === 1) {
        event.innerHTML = "X";
        checkClass(i);
        player = 2;
        turn.innerHTML = "2 (O)";
    } else if (player === 2) {
        event.innerHTML = "O";
        checkClass(i);
        player = 1;
        turn.innerHTML = "1 (X)";
    }
    event.classList.add("boxInsert");
    event.removeEventListener("click", handleBoxClick);
}

function checkClass(index) {
    if (player === 1) {
        board[index] = "X";
    } else {
        board[index] = "O";
    }
    checkWin();
}

function checkWin() {
    for (let i = 0; i < win.length; i++) {
        counter1 = 0;
        counter2 = 0;
        for (let j = 0; j < win[i].length; j++) {
            let num = parseInt(win[i][j]);
            if (board[num] === "X") {
                counter1++;
            } else if (board[num] === "O") {
                counter2++;
            }
            if (counter1 === 3 || counter2 === 3) {
                winner.innerHTML = "Player " + player + " wins!";
                clearBoard();
                // return;
            }
        }
    }
}

function clearBoard() {
  console.log("end")
    setTimeout(() => {
        board = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
        // player = 1;
        // turn.innerHTML = "1 (X)";
        winner.innerHTML = "";

        box.forEach((element) => {
            // element.removeEventListener("click", handleBoxClick);
            element.innerHTML = "";
            // element.classList.remove("boxInsert");
        });

        // box.forEach((element, index) => {
        //     element.addEventListener("click", () => {
        //         handleBoxClick(element, index);
        //     });
        // });
    }, 1000);
}

function resetGame() {
    clearBoard();
}
