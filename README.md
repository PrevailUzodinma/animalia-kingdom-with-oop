# animalia-kingdom-with-oop

Welcome to Kingdom ANIMALIA, a bunch of code that models the animal kingdom using the four principles of OOP.

## Getting Started

1. **The Structure of the Code:**

    The Animal Kingdom is classified into 2 major classes:
   - Vertebrates: Animals with backbone
   - Invertebrates: Animals without backbone


        **VERBRATE CLASS**

        Has the following classes inheriting its properties:
        - **Fish** Class
        - **Amphibia** Class
        - **Reptiles** Class
        - **Aves** Class
        - **Mammals** Class

        **INVERBRATE CLASS**

        Has the following classes inheriting its properties:

        - **Anthropoda** Class

        *each class being able to represnt its cold or warm-blooded properties*
   
 2. **Usage:**

- Create an animal instance of choice from any of the above Classes:
   ```
    let <animalInstance> = new <animalClass>("animalName")
     ```
     For example, let animal1 = new Fish("Tilapia");

- To check if animal is warm-blooded:
     ```
     <animalInstance>.isWarmBlooded();
     ```
     For example, animal1.isWarmBlooded();

- To check if animal is cold-blooded:
     ```
     <animalInstance>.isColdBlooded();
     ```
     For example, animal1.isColdBlooded();

- To check the name of the animal:
     ```
     <animalInstance>.animalName
     ```
     For example, animal1.isColdBlooded();

    *Happy Coding!*