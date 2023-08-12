class Animal {
    constructor(name, sound){
        this.animalName = name;
        this.animalSound = sound;
    }
    present(){
        return this.animalName + " is barking " + this.animalSound;
    }
}
class dog extends Animal{
    constructor(name, sound, fetch){
        super(name, sound);
        this.animalFetch = fetch;
    }
    show(){
        return this.present() + " and fetching ball " + this.animalFetch;
    }
}
const myDog = new dog("tommy", "woof!", "");
console.log(myDog.show());
