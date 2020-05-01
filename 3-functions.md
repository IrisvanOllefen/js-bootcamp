# 'Normal' Functions and Higher-Order Functions

## Functions

### The basics

#### Calling a Function
You can call a function by simply typing out the name of the function, in the case of the example below, it is ellipse.
``` javascript
ellipse(100,100,50,50);
```

#### Defining a Function
A function definition is a regular binding where the value of the binding is a function. A function is created with an expression that starts with the keyword function. Functions have a set of parameters and a body which contains the statements that are to be executed when the function is called. 
Defining a function can be done like below:
``` javascript
function setup() {
  // content of the function
}
```

#### A reason why functions are good to use
Functions are a way that you can organize your program. You can break it in to modulair pieces and keep it viewable.
Instead of writing a lot of code and not being able to see it as modules but only seeing it as one block of code, building up your code out of functions can make it more modular and viewable.

#### Functions are values
A function binding usually acts as a name for a specific piece of a program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name. But the two are different. A function value can do all the things that other values can do, you can do more than just call it. 

#### Arrow Functions
With ES6 came a new way to write functions, it works like the following piece of code:
``` javascript
const power = (base, exponent) => {
  let result = 1;
  return result;
}
```

#### When is a good time to use a function?
There are two more or less natural ways for function to be introduced into programs:
* The first is that you find yourself writing similar code multiple times.
* The second way is that you find you need some functionality that you haven't written yet and that sounds like it deserves its own function.

### Deeper Theoretics

#### Bindings and Scopes
Each binding has a scope, which is part of the program in which the binding is visible. For bindings defined outside of any function of block, the scope is the whole program and you can refer to such bindings wherever you want. These are called global.

#### Nested Scopes
JavaScript distinguishes not just global and local bindings, blocks and functions can be created inside other blocks and function, producing multiple degrees of locality. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

#### The Call Stack
The place where the computer stores context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

#### Recursion
It is perfectly okay for a function to call itself, as long as it doesn't do it so often that it overflows the stack. A function that calls itself is calles recursive.

## Higher Order Functions

### The Basics

#### How they work & How they are written
In functional programming languages, functions are values and can be assigned to variables. Just like strings can be assigned to functions, small functions can also be composed in to bigger functions.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. These allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions:
``` javascript
function greaterThan(n) {
	return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// --> true
```
And we can have functions that change other functions:
``` javascript
function noisy(f) {
	return(...args) => {
		console.log("calling with",args);
		let result = f(...args);
		console.log("called with", args, ", returned", result);
		return result
	};
}
noisy(Math.min)(3, 2, 1);
// --> calling with [3, 2, 1]
// --> called with [3, 2, 1], returned 1
```

#### Abstraction
Abstractions hide details and give us the ability to talk about problems at a higher level. Plain functions, as we've seen them so far, are a good way to build abstractions. But sometimes they fall short. It is structured a little like a for loop —it first describes the kind of loop and then provides a body. However, the body is now written as a function value, which is wrappe din the parentheses of the call to repeat. This is why it has to be closed with the closing brace and closing parenthesis.

#### Transforming With Map
The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but it's content will have been mapped to a newform by the function.
I'll talk more about this in a later chapter.

#### Summarizing With Reduce
Another common thing to do with arrays is to compute a single value from them. The higher-order operation that represents this pattern is called reduce. It builds a value by repeatedly taking a single element from the array and combining it with the current value. The parameters to reduce are, apart from the array, a combining function and a start value.

### Deeper Theoretics

#### Strings and Character Codes
The `some` method is another higher-order function. It takes a test function and tells you whether that function returns true to any of the elements in the array. JavaScript's charCodeAt method gives you a code unit, not a full character code. The codePointAt method, added later, does give a full Unicode character.

#### Recognizing Text
The `countBy` function expects a collection (anything that we can loop over with for/or) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group. It uses another array method named `findIndex`.

#### Exercises I've made using this information:
[freeCodeCamp Basic JavaScript]()                   
[JavaScript30 Array Cardio]()                   
[freeeCodeCamp Functional Programming]()                   
[nodeSchool Workshopper]()                   

#### Sources for the information I've used for this story:
[The Coding Train - Functions](https://www.youtube.com/watch?v=wRHAitGzBrg)                   
[Eloquent JavaScript](https://eloquentjavascript.net/03_functions.html)                   
[The Coding Train - Higher Order Functions](https://www.youtube.com/watch?v=H4awPsyugS0)                   
[Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html)                   









