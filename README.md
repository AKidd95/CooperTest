# Cooper Test Challenge
## Weekend challenge, week 2

The challenge was to set up a JavaScript program that returns assessment given the user's gender, age and completed distance, in addition to using Jasmine to test all functions.

## How to use Cooper Challenge

Follow these steps:

1. Open the SpecRunner.html file in your browser and open the console.

2. Create a person object with the attributes gender and age.

```
person = new Person({age: 44, gender: 'male'});
=> Person {gender: "male", age: 44}
```


Input the distance completed to call the cooperAssess function:
```
cooperAssess(person, 2300);
=> undefined
```
Call the cooperMessage function on the person created to get a message back with your result:

```
person.cooperMessage
"Average"
```

# Resources

Our inspiration comes from CraftAcademy course material, Jade and Anotella's solution, stack Overflow and other internet sources.
