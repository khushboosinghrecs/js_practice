// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound");
    }
}

// Child class extending Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the parent class
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof!");
    }

    fetch() {
        console.log(`${this.name} is fetching.`);
    }
}

// Creating an instance of the child class
const myDog = new Dog("Buddy", "Golden Retriever");

// Accessing properties and methods
console.log(myDog.name); // Output: Buddy
myDog.makeSound();       // Output: Woof!
myDog.fetch();           // Output: Buddy is fetching.
