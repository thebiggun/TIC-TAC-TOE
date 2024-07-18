let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let turn = 1;
let turn0 = 1;
let flag = 'f';
let count=0;
let newElement = document.getElementById('new');

document.getElementById('player1').style.borderColor = "#FFD700";

let wins = (comment) => {
    document.getElementById('win').innerText = comment;
    document.getElementById('Ban').style.display = 'flex';
}

let butt = document.querySelectorAll('.butt');
for (let i of butt) {
    i.addEventListener('click', () => { count++; });
    i.addEventListener('click', () => {
        if (turn0 == 1) {
            i.innerText = "X";
            turn0 = 2;
            document.getElementById('player1').style.borderColor = "#124559";
            document.getElementById('player2').style.borderColor = "#FFD700";
        }
        else {
            i.innerText = "O";
            turn0 = 1;
            document.getElementById('player1').style.borderColor = "#FFD700";
            document.getElementById('player2').style.borderColor = "#124559";
        }
        i.disabled = true;
        checkWin();
    });
}
const checkWin = () => {
    for (let i of win) {
        let posval1 = butt[i[0]].innerText;
        let posval2 = butt[i[1]].innerText;
        let posval3 = butt[i[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "" && posval1 == posval2 && posval2 == posval3) {
            butt[i[0]].style.backgroundColor = "#FFD700";
            butt[i[1]].style.backgroundColor = "#FFD700";
            butt[i[2]].style.backgroundColor = "#FFD700";
            butt[i[0]].addEventListener('mouseenter', () => {butt[i[0]].style.backgroundColor = "#FFD700";});
            butt[i[0]].addEventListener('mouseleave', () => {butt[i[0]].style.backgroundColor = "#FFD700";});
            butt[i[1]].addEventListener('mouseenter', () => {butt[i[1]].style.backgroundColor = "#FFD700";});
            butt[i[1]].addEventListener('mouseleave', () => {butt[i[1]].style.backgroundColor = "#FFD700";});
            butt[i[2]].addEventListener('mouseenter', () => {butt[i[2]].style.backgroundColor = "#FFD700";});
            butt[i[2]].addEventListener('mouseleave', () => {butt[i[2]].style.backgroundColor = "#FFD700";});
            console.log("Winner");
            flag = 't';
            if (posval1 == "X") {
                document.getElementById('player1').style.backgroundColor = "green";
                document.getElementById('player1').style.color = "white";
                document.getElementById('player2').style.backgroundColor = "red";
                document.getElementById('player2').style.color = "white";
                document.getElementById('player1').style.borderColor = "#FFD700";
                document.getElementById('player2').style.borderColor = "#124559";
                wins("X WON THE GAME")
            }
            else {
                document.getElementById('player2').style.backgroundColor = "green";
                document.getElementById('player2').style.color = "white";
                document.getElementById('player1').style.backgroundColor = "red";
                document.getElementById('player1').style.color = "white";
                
                document.getElementById('player2').style.borderColor = "#FFD700";
                document.getElementById('player1').style.borderColor = "#124559";
                wins("O WON THE GAME")
            }
            for (let j of butt) {
                j.disabled = true;
            }
        }
    }
    if(flag == 'f' && count == 9){
        document.getElementById('player1').style.backgroundColor = "#1D1C1C";
        document.getElementById('player2').style.backgroundColor = "#1D1C1C";
        document.getElementById('player1').style.borderColor = "white";
        document.getElementById('player2').style.borderColor = "white";
        document.getElementById('player1').style.color = "white";
        document.getElementById('player2').style.color = "white";
        wins("IT'S A TIE");
    }
}
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    flag = 'f';
    count = 0;
    for(let i of butt){
        i.innerText = "";
        i.disabled = false;
        i.style.backgroundColor = "white";
        i.addEventListener('mouseenter', () => {
            i.style.backgroundColor = "#aec3b0";
        });
        i.addEventListener('mouseleave', () => {
            i.style.backgroundColor = "white";
        });
    }
    document.getElementById('player1').style.backgroundColor = "#aec3b0";
    document.getElementById('player1').style.color = "#124559";
    document.getElementById('player2').style.color = "#124559";
    document.getElementById('player2').style.backgroundColor = "#aec3b0";
    turn = (turn==1)?2:1;
    turn0 = turn;
    if(turn == 1){
        document.getElementById('player1').style.borderColor = "#FFD700";
        document.getElementById('player2').style.borderColor = "#124559";
    }
    else{
        document.getElementById('player1').style.borderColor = "#124559";
        document.getElementById('player2').style.borderColor = "#FFD700";
    }
    document.getElementById('Ban').style.display = "none";
});


newElement.addEventListener('click', () => {
    flag = 'f';
    count = 0;
    for(let i of butt){
        i.innerText = "";
        i.disabled = false;
        i.style.backgroundColor = "white";
        i.addEventListener('mouseenter', () => {
            i.style.backgroundColor = "#aec3b0";
        });
        i.addEventListener('mouseleave', () => {
            i.style.backgroundColor = "white";
        });
    }
    document.getElementById('player1').style.backgroundColor = "#aec3b0";
    document.getElementById('player1').style.color = "#124559";
    document.getElementById('player2').style.color = "#124559";
    document.getElementById('player2').style.backgroundColor = "#aec3b0";
    turn = 1;
    turn0 = 1;
    document.getElementById('player1').style.borderColor = "#FFD700";
    document.getElementById('player2').style.borderColor = "#124559";
    document.getElementById('Ban').style.display = "none";
});