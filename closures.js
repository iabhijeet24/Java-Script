// A function is defined inside another function.
// The inner function has access to the outer function's variables.

const button = document.getElementById("clickButton");
const text = document.getElementById("textContent");

function resize(size){

    function addsize(){
        text.style.fontSize= `${size}px`;
    }
    return addsize;
}

const size70 = resize(70);

button.addEventListener("click", size70);