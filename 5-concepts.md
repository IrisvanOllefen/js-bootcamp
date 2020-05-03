# Concepts such as Binding, Scope, Closures and Hoisting

## Binding and Scope
The part of the program in which a binding is visible is also known as the scope, and each binding has a scope. There are two different scopes a bindings can have. The first is the one where a binding is defined outside of a function or block. This means that the whole program is the scope, this is called a global scope. There are also bindings that are created specifically for function parameters, or they are declared and called in a function itself. These are known as local scopes. 
Bindings that are declared with `let` and `const` are local bindings, they work only in the block they are declared in. Another example is when you create a binding in a loop. The binding is only visible _inside_ the loop and not before or after it.  

## Global Scope

### What is the Global Scope?
I sort of explained it here above, but let me rephrase it. A global scope means the entire program. So, when making a variable that is not in a specific function or something else, it will be in the global scope. Things inside of a global scope can be called anywhere in the program and work.

### How do we use them?
There are multiple reasons why it is a good idea to use a global scope instead of a local scope. The writer of the book You Don't Know JavaScript, who goes by the name of _Getify_ explains three main ways to use global scope:
* Some developers like to use ES modules directly instead of transpiling them in to other module-bundle formats. These files get loaded by the JS environment as individual bundles. Next, each module imports references to any other module it needs access to. This can only be done when using a global scope.
* The second way is when you use a bundler in the building process. Getify explains that these files usually get concatenated together before they actually go to a browser or any other JS engine. As you can imagine, these only process the bigger files, and don't pay attention to any local scopes. That means you need to use global scopes for things to be noticed.
* The third reason to use global scope has to do with all bundler tools, files, etc. If you have no surrounding scope that keeps all these loose pieces together, the global scope is the only one that will make them work together.

### Block Scope vs. Function Scope
There is also a difference between local scopes. These two are called the block scope and the function scope. 

#### Block Scope
The block scope works with the keywords `let` and `const`. When you declare variables using this keyword, they will be put in the block statement. MDN mentions that a block statement allows multiple statements, even if JavaScript onlt expects one statement. This combining of statements in to blocks is seen as a common practice in JavaScript. 
Blocks are used a lot in association with `if...else` and `for` statements. 
The most important thing to remember is that a block scope exists within curly brackets.

#### Function Scope
The function scope is the opposite of a block scope and works with the `var` keyword. A function scope exists within a function. I think the difference between these two scopes will become more clear in the code example below.

#### Code example
``` javascript
// global scope

function greetings() {
  // function scope / local scope
  var person1 = "person1" // function scope / local scope

if(true) { // block scope, the same local scope
  let person2 = "person2" // block scope
}

console.log(person1); // returns person1
console.log(person2); // returns ERROR, person2 is not defined
}
```

## Hoisting

### What is it?
Hoisting is all about execution contexts in JavaScript. MDN tells us the strict definition of hoisting: "The variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code".
This basically means the following: before a browser executes the JavaScript in your browser, it first has to compile it in to its memory. It does this in multiple stages and this makes hoisting possible. It first remembers all the variables and functions available, and then goes over the code a second time, reading the rest. This makes no physical changes in your code, but does make it easier for a browser to execute your code.
The only thing that gets hoisted is the declarations, so not the initializations.

## Closures

### Together with Hoisting
Closures work together with hoisting. This means that a function can remember the outside context that has been declared before the function is run. You can see JavaScript functions as not just functions, but also as closures.
Closures basically have access to older functions. This means, that when you have a function in another function, those inner functions can get access to those outer functions. 

### Basically
It becomes a little more clear in the following example code:
``` javascript
// Global Scope
var person1 = "person1"

function func1() {
  // local scope
  var person2 = "person2"
  
    function func2() {
    // local scope
    var person3 = "person3"
    
     function func3() {
     // local scope
     var person4 = "person4"
    
     console.log(person1)
    }
  }
}
```

#### Exercises I've made using this information:
[freeCodeCamp](https://github.com/IrisvanOllefen/js-bootcamp/blob/master/exercises/exercises-day4/4.1_freeCodeCamp_BasicJS.md)                        
[nodeSchool Workshopper](https://github.com/IrisvanOllefen/js-bootcamp/blob/master/exercises/exercises-day4/4.2_nodeSchoolWorkshopper.js)

#### Sources for the information I've used in this story:
[Eloquent JavaScript on Binding and Scope](https://eloquentjavascript.net/03_functions.html#h_XqQR5FlX+8)                        
[You Don't Know JS on Global Scopes](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch4.md)                        
[MDN on Block Scopes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/block)                        
[MDN on Function Scopes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)                        
[MDN on Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)                        
[Fun Fun Function on Closures](https://www.youtube.com/watch?v=CQqwU2Ixu-U)                        
