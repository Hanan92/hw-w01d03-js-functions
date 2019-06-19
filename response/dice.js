
const rollDice=function(){


let roll1=Math.floor(Math.random()*6)+1;
let roll2=Math.floor(Math.random()*6)+1;
let score=roll1+roll2;
return "Dice rolled are "+roll1+" and "+roll2+". Sum is "+score;

} 