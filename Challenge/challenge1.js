/*
MORNING CHALLENGE
************
    - declare a variable of FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/
// else/if
let FB = 15;
if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('FizzBuzz');
} else if (FB % 3 == 0) {
    console.log('Fizz');
} else if (FB % 5 == 0) {
    console.log('Buzz');
} else {
    console.log(FB);
}
// switch
let FB = 10;
switch(true) {
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log('FizzBuzz');
        break;
    case (FB % 3 == 0):
        console.log('Fizz');
        break;
    case (FB % 5 == 0):
        console.log('Buzz');
        break;
    default:
        console.log(FB);
}
// ternary
let FB = 10;
(FB % 3 == 0 && FB % 5 == 0) ? console.log('FizzBuzz')
    : (FB % 3 == 0) ? console.log('Fizz')
    : (FB % 5 == 0) ? console.log('Buzz')
    : console.log(FB);