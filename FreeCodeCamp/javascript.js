// Bracket Notation ==> A way to get a character at a specific index within a string

// Zero-based indexing ==> Start counting from 0

// Arrays store multiplevalues in one variable
    // multi-dimensional array. ==> AN array nested within another Array

    // Access data inside arrays using indexes

    // To add values to an array we use a push method

        /*e.g

            // Setup
                var myArray = [["John", 23], ["cat", 2]];

                // Only change code below this line

                myArray.push(['dog',3]);*/

// Another way to change the data in an array is with the .pop() function.

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.





// Parameters vs Arguments

// Parameters are variables that act as placeholders 
// for the values that are to be input to a function when it is called. 
// When a function is defined, it is typically defined along with one or more parameters. 

// Argument=========>The actual values that are input (or "passed") into a function when it is called are known as arguments.

// Parameters passed in a function

function testFun(param1, param2) {
    console.log(param1, param2);
  }

//   Arguments
  testFun('hello','world!');

//   Local Scope and Functions

//   Variables which are declared within a function, 
//   as well as the function parameters, have local scope. 
//   That means they are only visible within that function.

/*
Global vs. Local Scope in Functions

It is possible to have both local and global variables 
with the same name. When you do this, the local variable 
takes precedence over the global variable.
*/