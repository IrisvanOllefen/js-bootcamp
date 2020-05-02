# The Guide To Data Structures

## Arrays

### What is an Array?
An array is a list of values, seperated by comma's, imbedded by square brackets. Just like an object, it contains a collection of values. An array has an index, which is important because it gives a number to all the items inside the array. This means the first item in the array is `index[0]`. 

### Why Would You Use an Array?
There are multiple reasons why you can, would or should use an array, and if I'd list them all, it will probably be quite the list. But, a few good ideas are the following:
* You can use the numbers out of your array, and then use those in other parts of your code. This is why it is so convenient that an array has an index.
* If an object is not the right pick for what data you want to store, an array is also a very good way to store data inside of your code. An example is when you need to get the information from out of the array in other pieces in your code, like the above point. Using index makes this quite easy.

### Properties
Almost all JavaScript values have properties. The exceptions are the properties `null` and `undefined`. If you try to access these values, you will get an error.
There are two ways that you can access properties in JavaScript. The first one is with a dot like `value.x` and the other one uses square brackets like so `value[x]`.
There is a difference between these two. It is all about how the 'x' in this case is interpreted. If you use a dot, the word after the dot is the literal name that belongs to the property. If you instead use square brackets, the expression that is put between the brackets is evaluated to get you the property name.
Another property is the `array.length` property, which tells us how many elements are in an array.

### Methods

#### Push method
The push method adds values to the end of an array
``` javascript 
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.psuh('cows');
console.log(animals);
// --> animals ['pigs', 'goats', 'sheep', 'cows']
```
#### Pop method
The pop method removes the last value in the array and returns it.
``` javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
// --> plants ['broccoli', 'cauliflower', 'cabbage', 'kale']
```
#### Shift and unshift
We saw push and pop, which add and remove elements at the end of an array. The corresponding methods for adding and removing things at the start of an array are called unshift and shift.
``` javascript
function getTask() {
	return todoList.shift();
}
function rememberUrgently(task) {
	todoList.unshift(task);
}
```
#### indexOf and lastIndexOf
If you want to know what the index number of an element in an array is, you can use `indexOf` and give the element you're looking for. Similarly, if you know one value comes back multiple times, and you want the last one, do the same but just put `lastIndexOf` instead of `indexOf`.
``` javascript
console.log([1, 2, 3, 3, 1].indexOf(2));
	// --> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
	// --> 3
```
#### Slice
Another array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index will still be in the array, the end index will be left out.
```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
	// --> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
	// --> [2, 3, 4]
```
#### The Concat Method
The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.
``` javascript
function add (list, bookName) {
  var newBookList = list.concat([])
  newBookList.push(bookName);
  return newBookList;
  
  // Change code above this line
}
```
If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.

### Array Loops
A for loop is common in classical JavaScript. It works simple, it goes over arrays one element at a time. But, there is a simpler way to write such loops in modern JavaScript:
``` javascript
for (let entry of JOURNAL) {
	console.log(`${entry.events.length} events.`);
}
```

## Objects

### The Basic Explanation
Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression. There are two meanings for braces in JavaScript. 
* At the start of a statement, they start a block of statements. 
* At any other position, they describe an object. 
Marijn Haverbeke from Eloquent JavaScript gave a good explanation of objects: "You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it. The delete operator cuts off a tentacle from such an octopus."
If you want to know what properties an object has, use the`Object.keys` function.

### Methods
Methods are nothing more than properties that hold function values. When a function is called as a method, the binding called `this` in its body automatically points at the object that it was called on. 

### Mutability
We saw that object values can be modified. The values I described in an earlier chapter, like numbers, strings, and Booleans, are all immutable which makes it impossible to change the value of those types. 
But with objects, there is a difference between having two references to the same object and having two different objects that contain the properties.

### Prototypes
In addition to their set of properties, most objects also have a prototype. A prototype is another object that is used as a fallback source of properties. `Object.getPrototypeOf` returns the prototype of an object. You can use `Object.create` to create an object with a specific prototype.

### Classes
JavaScript's prototype system can be interpreted as a somewhat infomal take on a object-oriented concept called classes. A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class. 
So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself has the properties that instances of this class are supposed to have. This is what a constructor function does. If you put the keyword new in front of a function call, the function is treated as a constructor.
Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain empty object that derives from `Object.prototype`.
The actualy prototype of a constructor is `Function.prototype` since constructors are functions. Its prototype property holds the prototype used for instances created through it.

### Maps
A map (noun) is a data structure that associates vales (the keys) with other values. As such, using plain objects as maps is dangerous. There are several possible ways to avoid this problem. First, it is possible to create objects with no prototype. If you pass `null` to `Object.create`, the resulting object will not derve from `Object.prototype` and can safely be used as a map.
Object property names must be strings. If you need a map whose keys can't easily be converted to strings—such as objects—you cannot use an object as your map.
If you do have a plain object that you need to treat as a map for some reason, it is useful to know that `Object.keys` returns only an object's own keys, not those in the prototype.

### JSON
Because properties only grasp their value, rather than contain it, objects and arrays are stored in the computers memory as a sequence of bits holding the addresses of their contents. What we can do is serialize the data, that means it is converted into a flat description. A popular serialization format is called JSON.
JSON looks similar to JavaScript's way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

### Encapsulation
The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state. Different pieces of such a program interact with each other through interfaces. Separating interface from implementaton is a great idea. It is usually called encapsulation.

### Symbols
Property names are strings, that isn't entirely accurate. They usually are, but they can also be symbols. Symbols are values created with the symbol function. Unlike strings, newly created sumbols are unique—you cannot create the same symbol twice. Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.

### Getters, Setters, and Statics
Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values. For example, Map objects have a size property that tells you how many keys are stored in them. Such methods are called getters, and they are defined by writing get in front of the method name in an object expression or class declaration. Whenever someone reads from this object's size property, the associated method is called. You can do a similar thing when a property is written to, using a setter.

### Inheritance
JavaScript's prototype system makes it possible to create a new class, much like an old class, but with new definitions for some of its properties. In object-oriented programming terms, this is called inheritance. The new class inherits properties and behavior from the old class. The use of the word extends indicates that this class shouldn't be directly based on the default Object prototype but on some other class. This is called the superclass. The derived class is the subclass.
Inheritance allows us to build slightly different data types from existing data types with relatively little work.

## String and their Properties

### String Methods
Every string value also has a number of methods.

#### Slice and indexOf
Some very useful ones are slice and indexOf, which resembe the array methods of the same name.
``` javascript
console.log("coconuts".slice(4, 7));
	// --> nut
console.log("coconuts".indexOf("u"));
	// --> 5
```
#### Trim
The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a sting.
``` javascript
console.log(" okay \n ".trim());
	// --> okay
```
#### zeroPad
The zeroPad function also exists as a method. It is called padStart and takes the desired length and padding character as arguments.
``` javascript
console.log(String(6).padStart(3, "0"));
	// --> 006
```
#### Split and Join
You can slipt a string on every occurrence of another string with split and join it again with join.
``` javascript
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
	// --> ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
	// --> Secretarybirds. specialize. in. stomping
```
#### Repeat
A string can be repeated with the repeat method.
``` javascript
console.log("LA".repeat(3));
	// --> LALALA
```

## Functions

### Rest Parameters
It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given. To write such a function, you put three dots before the function's last parameter, like this:
``` javascript
function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		oif (number > result) result = number;
	}
	return result;
}
console.log(max(4, 1, 9, -2));
	// --> 9
```
When such a function is called, the rest parameter is bound to an array containing all further arguments. You can use a similar three-dot notation to call a function with an array of arguments.
``` javascript
let numbers = [5, 1, 7];
console.log(max(...numbers));
// --> 7
```
### The Math Object
As we've seen, Math is a grab bag of number-related utility functions.
#### Math.max
``` javascript
console.log(Math.max(1, 3, 2));
// expected output: 3
```
#### Math.min
``` javascript
console.log(Math.min(2, 3, 1));
// expected output: 1
```
#### Math.sqrt
``` javascript
function calcHypotenuse(a, b) {
  return(Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5
```
#### Trigonometry
If you need to do trigonometry, Math can help. It contains cos, sin and tan. As well as their inversice functions, acos, asin and atan, respectively. The number π (pi) is available as Math.PI.
``` javascript
function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI/180);
}

console.log(getTanFromDegrees(0));
// expected output: 0
// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));
// expected output: 0.6747409422235527
```
#### Math.floor and Math.random
If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random
``` javascript
console.log(Math.floor(Math.random() * 10));
// --> 2
```
#### Math.ceil
Ceil stands for "ceiling", and rounds up to a whole number.
``` javascript
console.log(Math.ceil(.95));
// expected output: 1
```
#### Math.round
This one rouds up to the nearest whole number.
``` javascript
console.log(Math.round(0.9));
// expected output: 1
```
#### Math.abs
Takes the absolute value of a number, meaning it negates negative valies but leaves positive ones as they are.
``` javascript
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2
```

### Exercises I've made with this information:
[freeCodeCamp - Basic JavaScript](https://github.com/IrisvanOllefen/js-bootcamp/blob/master/exercises/exercises-day3/3.1_freeCodeCamp_BasicJS.md)

#### Sources for the information I've used for this story:
[The Coding Train - What is an array?](https://www.youtube.com/watch?v=VIQoUghHSxU)                    
[Eloquent JavaScript - Data Structures](https://eloquentjavascript.net/04_data.html)                    
[Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html)






