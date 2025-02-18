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



// BUILT IN HIGHER ORDER FUNCTION IN JS

// map(): Transforms an array by applying a function to each element.
{
const numbers = [1, 2, 3, 4];
const squared = numbers.map(x => x * x);
console.log(squared);  
}

{
var numbers = [1, 2, 3, 4];

function double(num) {
  return num * 2;
}

var doubledNumbers = numbers.map(double);
console.log(doubledNumbers);
}


// filter(): Creates a new array with all elements that pass a test.
{
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens);  
}

// reduce(): Accumulates a single result by applying a function to each element.
{
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, current) => total + current, 0);
console.log(sum);  
}

// forEach(): Executes a function on each item in an array but doesn't return a new array.
{
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
}