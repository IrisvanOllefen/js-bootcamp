# 'Normal' Functions and Higher-Order Functions

## Functions

### The basics

#### Calling a Function
You can call a function by simply typing out the name of the function, in the case of the example below, we are calling a function named figure.
``` javascript
figure(100,100,50,50);
```

#### Defining a Function
If we talk about defining a function, we're talking about a regular binding, where the value of the binding is a function. 
A function is created with an expression that starts with the keyword function. Functions have a set of parameters and a body which contains the statements that are to be executed when the function is called. 
Defining a function can be done like below:
``` javascript
function setup() {
  // content of the function
}
```

#### A reason why functions are good to use
Functions can help you organize your program. You can break your code up in modulair pieces so that it stays viewable. This means that instead of writing a lot of code, and seeing it all as one block of code, functions can help you build up your code to make it mode modular and viewable.

#### Functions are values
A function binding usually acts as a name for a specific piece of a program. Such a binding is defined once and never changed. But there is a difference between a function and its name, even though these sometimes get confused. 
The two are different because a function value can do all the things that other values can do, you can do more than just call it. 

#### Arrow Functions
With ES6 came a new way to write functions, they are called arrow functions and work like the following piece of code:
``` javascript
const power = (base, exponent) => {
  let result = 1;
  return result;
}
```

#### When is a good time to use a function?
There are two reasons for functions to be introduced in to programs:
* If you find yourself writing similar code over and over again, it's better to make it in to one function.
* If you think you need a new functionality that you have not yet written, but it sounds like it deserves its own function, you should probably just give it its own function.

### Deeper Theoretics

#### Bindings and Scope
Every binding is visible, and each binding also has a scope which is part of the program. There are also bindings defined outside a function or a block. In that case, the scope is the whole program. This is nice because you can refer to such bindings wherever you want. These bindings are also called global bindings.

#### Nested Scopes
JavaScript makes a difference between global and local bindings. But, they also see blocks and functions. These can be created inside other blocks and function. this can cause for multiple degrees of locality. 
Each local scope can see the local scopes that contain it, and global scopes can be seen by every scope. 
This is called lexical scoping and basically means binding visibility.

#### The Call Stack
A call stack is the place where the computer stores its context. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

#### Recursion
It is perfectly okay for a function to call itself, as long as it doesn't do it so often that it overflows the stack. A function that calls itself is called recursive.

## Higher Order Functions

### The Basics

#### How they work & How they are written
In functional programming languages, functions are not just _functions_. They are seen as values and can be assigned to variables. This is just like how strings can be assigned to functions. And this can work quite well if you use small functions that can work inside of a bigger function.
Higher-order functions are functions that work on other functions. This can mean that they either take those functions as arguments, or return them. They allow us to abstract over actions instead of just over values. They come in several forms.
The first one is a function that creates a new function:
``` javascript
function greaterThan(n) {
	return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// --> true
```
We can also have a function that changes another function:
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
Abstractions hide details and give us the ability to talk about problems at a higher level. A good way to build abstractions are plain functions. Sometimes these do fall short. 
Abstraction is kind of structured like a for loop:
* it first described what kind of loop
* then it provides a body
But, it is different with abstraction because in this case, the body is written as a function value. This is then wrapped in the parentheses of the call to repeat. 
That is also the reason why it should be closed with a closing brace and closing parenthesis.

#### Transforming With Map
The map method builds a new array, it does this by applying a function to all of its elements, which returns values.
The content of this new array will be mapped to a new form by the functon, but it will still have the same length as the input array. 
I will talk more about this in a later chapter.

#### Summarizing With Reduce
Another common thing to do with arrays is to compute a single value from them. Reduce is this type of pattern that represents a higher-order operation. What it does is building a value, it does this by taking a single element fom an array repeatedly and combining it with the current value. The parameters to reduce are a combining function and a start value, apart from the array.

### Deeper Theoretics

#### Strings and Character Codes
The `some` method is another higher-order function. What this particular method does is taking a test function. Then, it tells you whether that function returns true to any of the elements in the array. 
You can use JavaScript's charCodeAt method. this gives you a code unit, but not a full character code. A method that does give a full Unicode character, is codePointAt, which was added later.

#### Recognizing Text
The `countBy` function expects a collection (anything that we can loop over with for/or) and a function that computes a group name for a given element. What is does is returning an array of objects, each of which names a group and then tells you how many elements they found in that group. It also works with another array method with is named `findIndex`.

#### Exercises I've made using this information:
[freeCodeCamp Basic JavaScript]()                   
[JavaScript30 Array Cardio]()                   
[freeeCodeCamp Functional Programming]()     

#### Sources for the information I've used for this story:
[The Coding Train - Functions](https://www.youtube.com/watch?v=wRHAitGzBrg)                   
[Eloquent JavaScript](https://eloquentjavascript.net/03_functions.html)                   
[The Coding Train - Higher Order Functions](https://www.youtube.com/watch?v=H4awPsyugS0)                   
[Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html)                   
