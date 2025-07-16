function add(a){
    return function(b){
       return function(c){
            return a + b + c;
        };
    };
}

console.log(add(8)(2)(2));



{
function sendAutoEmail(to) {
    return function (subject) {
    return function (body) {
    return ( `Sending Email to ${to} with subject ${subject}: ${body}`);
    }
}
}
}
console.log(sendAutoEmail("abhijeet@gmail.com")("Verification")("verification for license"));