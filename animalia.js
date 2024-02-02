class AnimalKingdom {
    //APPLIYNG ENCAPSULATION: The name of the animal is hidden, you must use instance.animalName to get access to the name.
    #name;
constructor(name){
// APPLYING ABSTRACTION: hiding implementation details of Animal Kingdom.
    if(this.constructor == AnimalKingdom){
        throw new Error("Cannot call this class directly");
    }
    this.#name =  name;
}
}