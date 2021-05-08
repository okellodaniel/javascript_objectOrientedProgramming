// // elseif statements
// function foo(x){
//     if(x<2){
//         console.log('less than 2' ) 
//     }
//     else if (x<1){
//         console.log( 'less than 1') 
//     }
//     else{
//         console.log( 'greater than or equal to 2') 
//     }
// };

// function bar(x){
//     if(x<1){
//         console.log( 'less than 1') 
//     }
//     else if (x<2){
//         console.log('less than 2' ) 
//     }
//     else{
//         console.log( 'greater than or equal to 2') 
//     }
// };

// foo(0);
// bar(0);


const a = 1;
const b = 'Kitimbo';

console.log(a+b);


/**
 * Returning Boolean Values from Functions
You may recall from Comparison with the Equality Operator that all comparison operators
 return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return 
the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
Fix the function isLess to remove the if/else statements.


 * 
 */
