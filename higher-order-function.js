// HIGHER ORDER FUNCTIONS IN JS
// Functions which accepts a functions as a argument or return a function is called a high order function.

// ARROW FUNCTION IN JS

// Traditional Function
function add(a, b) {
    return a + b;
}


// Arrow Function
const add = (a, b) => a + b;

console.log(add(5, 3)); 



// EXAMPLES



function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); 
  console.log(triple(5));


//   EXAMPLES


function createHelloWorld(){
    return function(){
        return "Hello World !";
    }
}

let hello= createHelloWorld()
console.log( hello() )