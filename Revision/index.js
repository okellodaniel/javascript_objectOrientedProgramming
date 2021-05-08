// Creating Objects

    // Object Literals

        // curly braces are object literal syntax
        
        // In javascript an object is a collection of key value Pairs
        
        // const circle = {

        //     // key value pairs

        //     // These are the properties( Hold values)
        //     radius: 1,
        //     location: {
        //         x:1,
        //         y:1
        //     },

        //     // This is a method (defines some logic)
        //     draw: function(){
        //         console.log('draw')
        //     }

        // };   

        // // we'll access these members using the dot notation

        // circle.draw();


        // In cases where you want to create a new circle, youd copy and paste the code of the circle,
        // cloning it. However if there are many methods for a given object this mihgt
        // seem hectic

        // this makes the object literal syntax difficult in cases of fixing bugs
        
        
    // Behaviour ====> If an object has many methods


// // Factories and Constructors

//         // Factory
//         function createCircle(radius){
//             return{
//                 radius,
//                 draw: function(){
//                     console.log('draw')
//                 }
//             };
//         }

//         const circle = createCircle(1);

//         // Constructors
//             // We use a constructor function
            
//             function Circle(radius){

//                 // the this statement is a reference to the object referencing this code.

//                 this.radius = radius;
//                 this.draw = function(){
//                     console.log('draw');
//                 }

//             }

//             const anotherCircle = new Circle(1);

//             // Every object has a constructor property that references the function that was used to create an object.

    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        };
    }
    Circle.call({},1);
    const anotherCircle = new Circle(1);



// Primitives and reference Types

    // // value types (primitives)
    //     // number, string,boolea, symbol, undefined,null
    // // reference types
    //     // Object,function,Array


    //     // Primitives

    //     let x = {value:10};
    //     let y = x;

    //     x.value = 20;

    //     // Primitives are copied by value;
    //     // Objects are copied by their reference;


    //     let obj = {value:10};
    //     function Increase (obj){
    //         obj.value ++;
    //     }

    //     Increase(obj);
    //     console.log(obj);

