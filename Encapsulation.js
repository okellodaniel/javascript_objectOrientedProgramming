// A class in OOP

// A template for creating an object

// var firstName = 'John';
// var lastName = 'Doe';

// function fullName(fname,lname){
//     return fname + ' '+ lname;
// };

// let name = fullName(firstName,lastName);
// console.log(name);

// this data is scattered, the functions and variables are scattered

// so we bring in a new motive, that is using encapsulation

// Encapsulation

// the intention is to bind or put data and its operators into one structure

// 1. Key word used  to create a class
// 2. Class Name
// 3. Data / variables / Attributes
// 4. Methods / Operators / Member function
// 5. Class Structure


// Basing on our previous code, we were describing a person4

// we'll create a class to act as a blueprint for other objects 

class Person{
    // data    
    // we pass parameters through the contructor function
    constructor(fNamepar,lNamepar){
       this.firstName = fNamepar;
       this.lastName = lNamepar; 
    }

    // operators

    fullName(){
        return this.firstName+ ' '+ this.lastName;
    };

};

// Start Creating People.

// We pass our Argument here.
let person1 = new Person('John','Doe');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName());

let person2 = new Person('Sewati','Brian');