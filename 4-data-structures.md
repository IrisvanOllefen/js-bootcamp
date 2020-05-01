# The Guide To Data Structures

## Arrays

### What is an Array?
An array is a list of values, seperated by comma's, imbedded by square brackets. It kind of looks like an object with a collection of values. An order of the array is very important. It has an index and this gives a number to all the items inside the array. So the first item in the array is `index[0]`. 

### Why Would You Use an Array?
You can use the numbers out of an array, and use them in other parts of your code. This is why it is so important that the array has an index, so you can call them apart from each other. You can put literally anything in an array.

### Properties
Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error. 
The two main ways to access properties in JavaScript are with a dot and with square brackets. Both `value.x` and `value[x]` access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. 
The length property of an array tells us how many elements it has.

### Methods

#### Push method
The push method adds values to the end of an array
#### Pop method
The pop method removes the last value in the array and returns it.
#### Shift and unshift
We saw push and pop, which add and remove elements at the end of an array. The corresponing methods for adding and removing things at the start of an array are called unshift and shift.
``` javascript
function getTask() {
	return todoList.shift();
}
function rememberUrgently(task) {
	todoList.unshift(task);
}
```
#### lastIndexOf
To search from the end instead of the start, there's a similar method called lastIndexOf.
``` javascript
console.log([1, 2, 3, 3, 1].indexOf(2));
	// --> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
	// --> 3
```
#### Slice
Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index is exclusive.
```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
	// --> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
	// --> [2, 3, 4]
```
#### The Concat Method
The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.
``` javascript
function remove(array, index) {
	return array.slice(0, index)
		.concat(array.sloce(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
	// --> ["a", "b", "d", "e"]
```
If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.

### Array Loops
A for loop is common in classical JavaScript—going over arrays one element at a time is something that comes up a lot. There is a simpler way to write such loops in modern JavaScript:
``` javascript
for (let entry of JOURNAL) {
	console.log(`${entry.events.length} events.`);
}
```

## Objects

### The Basic Explanation
Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression. Braces have two meanings in JavaScript. At the start of a statement, they start a block of statements. At any other position, they describe an object. You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it. The delete operator cuts off a tentacle from such an octopus. To find out what properties an object has, you can use the `Object.keys` function. Though no one really agrees on its precise definition, object-oriented programming has shaped the design of many programming languages, including Javascript.

### Methods
Methods are nothing more than properties that hold function values. When a function is called as a method, the binding called this in its body automatically points at the object that it was called on. 

### Mutability
We saw that object values can be modified. The types of values discussed earlier, like numbers, strings, and Booleans, are all immutable—it is impossible to change values of those types. With objects, there is a difference between having two references to the same object and having two different objects that contain the properties.

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
[freeCodeCamp - Basic JavaScript](https://www.freecodecamp.org/learn)

#### Sources for the information I've used for this story:
[The Coding Train - What is an array?](https://www.youtube.com/watch?v=VIQoUghHSxU)
[Eloquent JavaScript - Data Structures](https://eloquentjavascript.net/04_data.html)
[Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html)






