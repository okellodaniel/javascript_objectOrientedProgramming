// **Inheritance**

class Person{

    constructor(){
        // Data
        this.lastName
        this.lastName
        this.age
        this.weight
        this.height
    }
    // Operators
    talk();
    eat();
    walk();
    run();
}

class Man extends Person{

    // To specify characteristics of the child, 
    // define a constructor then refer to the super class contructor

constructor(){
    super();
}
};

class Woman extends Person{

};

let man = new Man();
