class Person {
    constructor(name, age){
        this.personName = name;
        this.personAge = parseInt(age);
    }
    present(){
        return this.personName + " is " + this.personAge + " years old ";
        
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.personMajor = major;
    }
    show(){
        return this.present() + "and studying " + this.personMajor;
    }
}
let Introduction = new Student("Nazmul", 23, "Computer Science.");
console.log(Introduction.show());