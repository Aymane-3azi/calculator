let  display = document.getElementById('display');


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
let salib = document.getElementById('salib');

salib.addEventListener("click",function (){
      display.value = display.value * -1;
});

function displayonscreen(po){
     // display.value += po;
     if(display.value === "0"){
        display.value = po;
     }else{
        display.value += po;
     }

}
function cleardisply(){
    display.value = "0";
}
function clculat(){
    display.value = eval(display.value);
}