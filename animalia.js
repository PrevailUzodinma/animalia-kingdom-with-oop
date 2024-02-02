class AnimalKingdom {
  //APPLIYNG ENCAPSULATION: The name of the animal is hidden, you must use instance.animalName to get access to the name.
  #name;
  constructor(name) {
    // APPLYING ABSTRACTION: hiding implementation details of Animal Kingdom.
    if (this.constructor == AnimalKingdom) {
      throw new Error("Cannot call this class directly");
    }
    this.#name = name;
  }

  get animalName() {
    return this.#name;
  }

  isColdBlooded() {
    console.log(`${this.#name} is a "cold-blooded" animal`);
    return true;
  }

  isWarmBlooded() {
    console.log(`${this.#name} is a "warm-blooded" animal`);
    return true;
  }
}

// APPLYING INHERITANCE: Animals with an without backbone are all under Animals
class Vertebrate extends AnimalKingdom {
  constructor(name) {
    super(name);
    // APPLYING ABSTRACTION: hiding implementation details of Vertebrate.
    if (this.constructor == Vertebrate) {
      throw new Error("Cannot call this class directly");
    }
  }
}

class Invertebrate extends AnimalKingdom {
  constructor(name) {
    super(name);
    // APPLYING ABSTRACTION: hiding implementation details of Invertebrate.
    if (this.constructor == Invertebrate) {
      throw new Error("Cannot call this class directly");
    }
  }

  // APPLYING POLYMORPHISM: Invertebrates are usually Cold Blooded.
  isWarmBlooded() {
    console.log(`${this.animalName} is NOT a "warm-blooded" animal`);
    return false;
  }
}

class Anthropoda extends Invertebrate {
  constructor(name) {
    super(name);
  }
}

class Fish extends Invertebrate {
  constructor(name) {
    super(name);
  }
}

class Amphibia extends Invertebrate {
  constructor(name) {
    super(name);
  }
}

class Reptiles extends Invertebrate {
  constructor(name) {
    super(name);
  }
}

class Aves extends Vertebrate {
  constructor(name) {
    super(name);
  }
  // APPLYING POLYMORPHISM: Aves are Warm-Blooded Vertebrates
  isColdBlooded() {
    console.log(`${this.animalName} is NOT a "cold-blooded" animal`);
    return false;
  }
}

class Mammals extends Vertebrate {
  constructor(name) {
    super(name);
  }
  isColdBlooded() {
    console.log(`${this.animalName} is NOT a "cold-blooded" animal`);
    return true;
  }
}

/* USAGE */

// 1. create an animal from Mammal Class
let animal1 = new Mammals("Cat");

// 2. check if the animal is Cold-blooded
animal1.isColdBlooded();

// 3. check if the animal is Warm-blooded
animal1.isWarmBlooded();

// 4. check the animal's name
console.log(`This animal is a ${animal1.animalName}`);
