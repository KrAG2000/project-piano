function randomizer() {
    let dice1 = Math.floor(Math.random()*6+1);
    let dice2 = Math.floor(Math.random()*6+1);
    console.log(dice1, dice2);

    document.getElementById("dice1").src = `./resources/dice_1to6/d${dice1}.jpg`; 
    document.getElementById("dice2").src = `./resources/dice_1to6/d${dice2}.jpg`;

    let player;
    if(dice1 > dice2) player = "Player 1 wins!";
    else if(dice1 < dice2) player = "Player 2 wins!";
    else player = "It is a draw!";
    document.getElementsByClassName("result")[0].innerHTML = `${player}`;
}