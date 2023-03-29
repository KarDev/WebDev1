// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0;
let incBtn = document.getElementById("increment-btn");

const decBtn = document.createElement("button");
incBtn.parentElement.appendChild(decBtn).innerHTML = "DECREMENT";
decBtn.id= "save-btn";

// incBtn.onclick = increment;
// decBtn.addEventListener("click",decrement);

incBtn.onclick = () => toIncrement(true);
decBtn.addEventListener("click",()=>toIncrement(false));

function increment(){
    document.getElementById("count-el").innerHTML = ++count;
}
function decrement(){
    document.getElementById("count-el").innerHTML = --count;
}
function toIncrement(flag) {
    if(flag) {
        document.getElementById("count-el").innerHTML = ++count;
    }
    else {
        document.getElementById("count-el").innerHTML = --count;
    }
}

