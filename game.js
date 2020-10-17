var score = document.getElementById('score');
var chance = 1;
var roll = document.getElementById("roll-die-class");

var pl1TotalScore = document.getElementsByClassName("player-1-score")[0];
var pl2TotalScore = document.getElementsByClassName("player-2-score")[0];

var pl1Winner = document.getElementById("pl1Winner");
var pl2Winner = document.getElementById("pl2Winner");

var newGame = document.getElementsByClassName("new-game-p")[0];

pl1Winner.style.display="none";
pl2Winner.style.display="none";

function changeChance(chance){
    if(chance == "1"){
        chance = "2";
    }else{
        chance = "1";
    }
    return chance;
}

function updateFinalScore(chance){
    if(chance==1){
        var number = Math.round(Math.random()*5)+1;
        score.innerText = number;
        var player1score = 0;
        player1score+=number;
        pl1TotalScore.innerText = Number(pl1TotalScore.innerText) + player1score;
    }
    else{
        var number = Math.round(Math.random()*5)+1;
        score.innerText = number;
        var player2score = 0;
        player2score+=number;
        pl2TotalScore.innerText = Number(pl2TotalScore.innerText) + player2score    
    }
    isWinner();
}

function isWinner(){
    if(Number(pl1TotalScore.innerText)>25){
        roll.disabled = true;
        pl1Winner.style.display="block";
        return;
    }
    if(Number(pl2TotalScore.innerText)>25){
        roll.disabled = true;
        pl2Winner.style.display="block";
        return;
    }
}

roll.addEventListener("click", function(){
    updateFinalScore(chance);
    chance = changeChance(chance);
    console.log("Chance = "+chance);
});

newGame.addEventListener("click", function(){
    pl1TotalScore.innerText="0";
    pl2TotalScore.innerText="0";
    score.innerText="0";
    pl1Winner.style.display="none";
    pl2Winner.style.display="none";
})