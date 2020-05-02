/*
I did the exercises from the JavaScripting Course from nodeSchool Workshopper,
here is the code I created with it.
*/

// EXERCISE 1 - INTRODUCTION

console.log('hello')

// EXERCISE 2 - VARIABLES

const example = 'some string'
console.log(example)

// EXERCISE 3 - STRINGS

const someString = 'this is a string'
console.log(someString)

// EXERCISE 4 - STRING LENGTH

const example = 'example string'
console.log(example.length)

// EXERCISE 5 - REVISING STRINGS

let pizza = 'pizza is alright'
pizza = pizza.replace('alright', 'wonderful')
console.log(pizza)

// EXERCISE 6 - NUMBERS

const example = 123456789
console.log(example)

// EXERCISE 7 - ROUNDING NUMBERS

const roundUp = 1.5
const rounded = Math.round(roundUp)
console.log(rounded)

// EXERCISE 8 - NUMBER TO STRING

let n = 128
n = n.toString()
console.log(n)

// EXERCISE 9 - IF STATEMENT

const fruit = "orange"
if (fruit.length > 5) {
    console.log("The fruit name has more than five characters.")
} else {
    console.log("The fruit name has five characters or less")
}

// EXERCISE 10 - FOR LOOP

let total = 0;
let limit = 10;
for (let i = 0; i < limit; i = i + 1) {
    total += i;
}
console.log(total)

// EXERCISE 11 - ARRAY

const pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni']
console.log(pizzaToppings)

// EXERCISE 12 - ARRAY FILTERING

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filtered = numbers.filter(
    function evenNumber(numbers) {
        return numbers % 2 == 0
    }
)
console.log(filtered)

// EXERCISE 13 - ACCESSING ARRAY VALUES

const food = ['apple', 'pizza', 'pear']
console.log(food[1])

// EXERCISE 14 - LOOPING THROUGH ARRAYS

let pets = ['cat', 'dog', 'rat']

for (let i = 0; i < 3; i++) {
    pets[i] = pets[i] + 's'
}
console.log(pets)

// EXERCISE 15 - OBJECTS

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
console.log(pizza)

// EXERCISE 16 - OBJECT PROPERTIES

const food = {
    types: 'only pizza'
}
console.log(food.types)

// EXERCISE 17 - OBJECT KEYS

const car = {
    make: 'Honda',
    model: 'Accord',
    year: 2020
}

const keys = Object.keys(car)
console.log(keys)

// EXERCISE 18 - FUNCTIONS

function eat(food) {
    return food + ' tasted really good.'
}
console.log(eat('bananas'))

// EXERCISE 19 - FUNCTION ARGUMENTS

function math(a, b, c) {
    return ((b * c) + a)
}
console.log(math(53, 61, 67))

// EXERCISE 20 - SCOPE

const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
    const b = 5;
    const c = 6;

    (function secondFunction() {
        const b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);

        (function thirdFunction() {
            const a = 7;
            const c = 9;

            (function fourthFunction() {
                const a = 1;
                const c = 8;
            })()
        })()
    })()
})()

