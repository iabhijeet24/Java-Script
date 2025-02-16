// FUNCTIONS IN JAVASCRIPT
// A block of code that performs a certain task.


function sayHello() {
    console.log("Hello!");
}

sayHello()



{
    function add(number1, number2) {
        console.log(number1 + number2);
    }
    add(5, 7)
}




{
    function multiply(number1, number2) {
    console.log(number1 * number2);
}
multiply(5, 5);

}



{

function divide(number1, number2) {
    console.log(number1 / number2);

divide(5, 5)
}
}


// adding unlimited numbers

{
    function addnumbers() {
        let ans = 0;
        for (let i = 0; i < arguments.length; i++) {
            ans =ans+ arguments[i]; 
        }
        return ans; 
    }
    let result = addnumbers(1, 5, 9, 5);
    console.log(result); 
}

// addding unlimited using spread operator

{
    function addnumbers(unlimited) {
        let ans = 0;
        for (let i = 0; i < unlimited.length; i++) {
            ans =ans+ unlimited[i]; 
        }
        return ans; 
    }
    let result = addnumbers(1, 5, 9, 5, 50);
    console.log(result); 
}