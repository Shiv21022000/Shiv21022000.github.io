let balance=100;

function play(color){
let colors=["Red","Green","White","Violet","Yellow"];
let winColor=colors[Math.floor(Math.random()*colors.length)];

if(color===winColor){
balance+=10;
document.getElementById("result").innerHTML="You WON! Winning colour: "+winColor;
}else{
balance-=10;
document.getElementById("result").innerHTML="You LOST! Winning colour: "+winColor;
}

document.getElementById("balance").innerHTML=balance;
}
