'use strict';

let player = 1;

function rolly(){

let random = Math.trunc(Math.random()*6+1);

if(random == '1') {
       document.getElementById('img').src="dice 1.png";
       
       document.getElementById(`hh${player}`).textContent = 0;
       player = player === 1 ? 2 : 1;

}
else if(random == '2') {
    document.getElementById('img').src="dice 2.png";
    document.getElementById(`hh${player}`).textContent =  Number(document.getElementById(`hh${player}`).textContent) + 1;
   
}   
else if(random == '3'){
    document.getElementById('img').src="dice 3.png";
   
    document.getElementById(`hh${player}`).textContent = 0;
    player = player === 1 ? 2 : 1;
}    
else if(random == '4')  {
    document.getElementById('img').src="dice 4.webp";
    document.getElementById(`hh${player}`).textContent =  Number(document.getElementById(`hh${player}`).textContent) + 1;

}   
else if(random == '5')  {
    document.getElementById('img').src="dice 5.webp";
    
    document.getElementById(`hh${player}`).textContent = 0;
    player = player === 1 ? 2 : 1;
}   
else if(random == '6')  {
    document.getElementById('img').src="dice 6.webp";
    document.getElementById(`hh${player}`).textContent =  Number(document.getElementById(`hh${player}`).textContent) + 1;

} 

}

function holdy(){
    document.getElementById(`h${player}`).textContent = Number(document.getElementById(`h${player}`).textContent) + Number(document.getElementById(`hh${player}`).textContent);
    document.getElementById(`hh${player}`).textContent = 0;
    player = player === 1 ? 2 : 1;
}

// if(document.getElementById('h1').textContent == '10'){
//     document.getElementById('h1').style.backgroundColor = "#60b347";
// }
// if(document.getElementById('h2').textContent == '10'){
//     document.getElementById('h2').style.color = "#60b347";
// }

function again(){
    document.getElementById('h1').textContent = 0;
    document.getElementById('h2').textContent = 0;
    document.getElementById('hh1').textContent = 0;
    document.getElementById('hh2').textContent = 0;

}