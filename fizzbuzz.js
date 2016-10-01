
//Wrap up everything in a function.
function fizzbuzz (){
//Count from 1-20 and stop at 20.
for(var i = 1; i <= 20; i++) {
//If the number is divisible by 3 & 5, call out 'FizzBuzz'.
  if (i % 3 === 0 && i % 5 === 0){
    console.log ('FizzBuzz');
   }
//If the number is only divisible by 3, call out 'Fizz'.
  else if (i % 3 === 0) {
    console.log ('Fizz');
  }
//If the number is only divisible by 5, call out 'Buzz'.
  else if (i % 5 === 0) {
    console.log ('Buzz');
  }
//If the number is not divisible by 3 or 5, just call out the number.
  else {
   console.log(i);
}
  
}
}

fizzbuzz ();