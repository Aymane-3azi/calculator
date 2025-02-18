let  display = document.getElementById('display');
//nubmers id 
let  zero = document.getElementById('btn-0');
let  one = document.getElementById('btn-1');
let  two = document.getElementById('btn-2');
let  three = document.getElementById('btn-3');
let  foor = document.getElementById('btn-4');
let  five = document.getElementById('btn-5');
let  sex = document.getElementById('btn-6');
let  seven = document.getElementById('btn-7');
let  aight = document.getElementById('btn-8');
let  naine = document.getElementById('btn-9');
let  salib = document.getElementById('adv');

//variable
// operation id
let  ac = document.getElementById('ac');
let  divison = document.getElementById('div');
let  multiplication = document.getElementById('mult');
let  minece = document.getElementById('min');
let  addition = document.getElementById('add');
//equale
let  equal = document.getElementById('eq');
let adv = document.getElementById('btn-adv');

salib.addEventListener("click",function (){
      display.value = display.value * -1;
});

function displayonscreen(po){
      display.value += po;
}
function cleardisply(){
    display.value = "";
}
function clculat(){
    display.value = eval(display.value);
}