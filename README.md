# Cooper Test Challenge
## Weekend challenge, week 2

The challenge was to set up a JavaScript program that returns assessment given the user's gender, age and completed distance, in addition to using Jasmine to test all functions.

## How to use Cooper Challenge

Follow these steps:

1. Open the SpecRunner.html file in your browser and open the console.

2. Create a person object with the attributes gender and age.

``` person = new Person({age: 20, gender: 'male'});
=> Person {gender: "male", age: 20}
```

person = new Person({age: 20, gender: 'male'});
=> Person {gender: "male", age: 20}
Input the distance completed in meters calling the cooperResult function:
cooperResult(person, 2300);
=> undefined

Call the cooperMessage function on the person created to get a message back assessing what's the level of your performance:
person.cooperMessage
"Average"
