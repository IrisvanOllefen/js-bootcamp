# About Values, Types and More

## Values
Since a JavaScript environment can be filled with a lot of things and pieces, it can get easy to get lost in all these pieces of information. These 'pieces of information' are called valus in JavaScript, and can also be seen as chuncks.
It's easy, you just have to invoke the name to create a value, and if you no longer use it, it will dissipate. 
There are different types values, so I'll go over them here.

### Numbers
Numbers are numbers, it's easy.        
```javascript
const numberValue = 5
```

#### Operators
There are also arithmetic operations such as addition or multiplication. This means you take more than one value and produce a new number. It basically means doing math in your code.
The + and * are those types of operators and can be easily used.          
```javascript
const numberOne = 1;        
const NumberTwo = 2;        
console.log(numberOne + numberTwo)
```

### Strings
Strings have to be modeled as a series of bits to exist inside the computer. This is done with the Unicode standard inside of JavaScript. 

#### Template Literals
These are backtick-quotes strings and are a ES6 feature. The easy thing that template literals do is convert whatever you write inside of the curly brackets into a string.
``` javascript
`half of 100 is ${100 / 2}`
```

### Unary Operators
There are also operators that are not symbols but words. The typeof operator is a good example. This operator shows which type the value is that you're calling in the console.
``` javascript
console.log(typeof 4.5)
// --> number
console.log(typeof "x")
// --> string
```

### Boolean Values

#### Comparison

These symbols for comparison are very popular and used in other things than programming. We're talking about the < and > signs, also known as "greater then" and "less than". These are known as binary operators.
To make these operators more specific, you can also add the = symbol to them to get the following things:
``` javascript
2 >= 2 // two is greater then or equal to two
5 <= 5 // five is less than or equal to five
11 == 11 // eleven is equal to eleven
15 != 15 // fifteen is not equal to fifteen
```
There is one value in JavaScript that is not equal to itself, and that is `NaN`, which means Not a Number

#### Logical Operators
There are also logial operators. These are also binary operators, but the result is true only if both the values given are true. The example below will make it more clear.
``` javascript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```
So, the `&&` returns only if both values are true. The `||` returns true if one of the values is true.

#### Conditional Operators
This last type of operator is a logical operator that is ternary, which means it has three values. 
``` javascript
console.log(true ? 1 : 2)
// --> 1
console.log((false ? 1 : 2)
// --> 2
The value on the left of the question mark picks which of the other two values will come out. If it is true, it chooses the middle value, if it is false, it will choose the value on the right.

### Empty Values
There are two more values, and these are special. `null` and `undefined` are values that basically tell you that there is no meaningful value. 
The difference between the two is that `null` is meant to be there, which means the one writing the code has made that value `null`.
And `undefined` means that it was not on purpose.

## Keywords

### The var keyword, that we're used to
The only variable keyword we've got in ES5 is `var`. In ES6, `let` and `const` joined the game. `var` is simple, it makes a new variable.

### The let keyword
`let` was one of the two new keywords that came with ES6. `let` introduces a block scope. You can use it in an if or for loop. When you do, the value will only be accessible inside of that loop. So when you declare something outside of that loop, it will not have an affect on the loop and it's `let` variables.

### The const keyword
The new `const` keyword looks quite a bit like `let`. The only difference is that `const` means a constant, which means that it can not be changes. You can not re-assign it wil a value.
So if you tell it `x = 11`, and then give it a new value, it will not work. 

### So, when do you use which one?
Most developers recommend to forget `var`, don't use it again, there are two new values that work just as good, even better maybe.
It's best to use `const` as much as possible. It helps error prevention and thanks to it being a constant makes sure your program or code is also quite constant.
When you know that you will need to change a value, use `let`. But, only if you know that what you want to do can not be done with `const`, like in a for loop.


