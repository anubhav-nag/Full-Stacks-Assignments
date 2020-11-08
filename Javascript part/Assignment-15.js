let b1 = document.getElementById("btn1");
let display = document.getElementById("counter");
let b2 = document.getElementById("btn2");

let count = 0;

display.textContent = count;

b2.addEventListener("click",increase);
function increase(){
    if(count >= 0){
        b1.disabled = false;
    }
    if(count <10){
        count++;
        display.textContent = count;
    }
}

b1.addEventListener("click",decrease);
function decrease(){
    if(count <= 1){
        b1.disabled = true;
    }
    if(count >= 1){
        count--;
        display.textContent = count;
    }
}