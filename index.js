let increment = document.getElementById("increment");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract")
let reset = document.getElementById("reset");
let currValue = document.getElementById("number");
let incrementNumber = 1;

increment.addEventListener("Change", function (e) {
    incrementNumber = parseInt(e.target.value);
    
});


add.addEventListener("click", function (e) {
    let total = parseInt(currValue.innerText) + incrementNumber;
    currValue.innerText = total;
});
subtract.addEventListener("click", function (e) {
    let total = parseInt(currValue.innerText) - incrementNumber;
    if(total < 0 ) {
        total = 0
    }
        currValue.innerText = total;
});
reset.addEventListener("click", function (e) {
    
    currValue.innerText = 0;
});