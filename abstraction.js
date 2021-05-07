// Abstraction is abouthiding the details and showing the functionality

class Person{
    constructor(fnamepar,lnamepar){
            // Data
        // Var makes the variable conform to a certian scope and accesscible onlu=y within the contructor.
        var firstName = fnamepar;
        var lastName = lnamepar;
        
        
        // Operations
        this.fullName = function(){
            return firstName + '' + lastName;
        };

        // Methods have instructive methods. The verb is instructive e.g (Digest, eat,talk,....as spposed to eating, talking,digesting e.t.c)

        var swallow = function(food){
            assimilate(food);
        }

        var assimilate = function(food){
            ejest(food);
        }

        this.ejest = function(food){
            return food;
        }
        
        var swallow = function(food){
            return food;
        }

        this.injest = function(food){
            swallow(food);
        }

        // this.digest = function(){
        //     injestion();
        //     swallowing();
        //     ejestion();
        //     assimilation();
        // }

    }

}

// Create People
let person1 = new Person('John','Solomons');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName());
person1.injest('Matooke');
console.log();

