//Parent class carWSXETRHYIP[-.

//Parent class car
//Class sets name using setName method
class Car{

    //Argument name and varaible names
    setName(name){
    This.name = name;
    }
    
    startEngine(){
    console.log ('Engine started for' +this.name);
    }
    
    stopEngine(){
    console.log ('Engine stoped for' +this.name);
    }
    }
    
    // Child class
    // Extends is the key word used for inheritance.
    // startEngine and stopEngine with will inherited by child class without them being coded in.
    // Enables a child/sub class to inherit from parent or super class.
    // To inherit use[extends(ParentClassName)]
    // To overide inheritance, a child class is given its own methods.
    class Toyota extends Car{
    
    //this.name of parent class is used and speed that comes intp the function.
    topSpeed(speed){
    console.log ('Top speed for' +this.name+' is ' +speed);
    }
    }
    
    //Creating object for child class
    //New shows the constructor
     let myCar = new Toyota();
     myCar.setName('Volks');
     myCar.startEngine();
     myCar.stopEngine();
     myCar.topSpeed(200);
        //Argument name and varaible names
    setName(name){
    this.name = name;
    }
    
    tartEngine(){
    console.log ('Engine started for' +this.name);
    }
    
    stopEngine(){
    console.log ('Engine stoped for' +this.name);
    }
    }
    
    // Child class
    // Extends is the key word used for inheritance.
    // startEngine and stopEngine with will inherited by child class without them being coded in.
    // Enables a child/sub class to inherit from parent or super class.
    // To inherit use[extends(ParentClassName)]
    // To overide inheritance, a child class is given its own methods.
    class Toyota extends Car{
    
    //this.name of parent class is used and speed that comes intp the function.
    topSpeed(speed){
    console.log ('Top speed for' +this.name+' is ' +speed);
    }
    }
    
    //Creating object for child class
    //New shows the constructor
     let myCar = new Toyota();
     myCar.setName('Volks');
     myCar.startEngine(5;
     myCar.stopEngine();
     myCar.topSpeed(200);