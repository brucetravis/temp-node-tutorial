// Modules

// We wil split our code in modules. This is for complex apps

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const secret = "SUPER SECRET"
const john = "John"
const peter = "Peter"

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi("Susan")
sayHi(john)
sayHi(peter)



// POST THIS CODE BLOCK IN ANOTHER PAGE SO THAT YOU CAN IMPORT CORRECTLY ACCORDING TO THE SYNTAX
// Modules - Encapsulated Code (only share minimum/ what we want)

// Encapsulation means keeping your code self-contained and only exposing what’s necessary.



// We wil split our code in modules. This is for complex apps
// In Node.js we just execute one file whch is app.js. It does not mean that all our code is in app.js
// All our code is split into different files and then connected to one file which is app.js

// This keeps our code clean organized and easy to manage.

// So It is one main file connecting to all other files and not viceversa
// app.js connects to other files using require()

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi("susan")
// sayHi("John")
// sayHi("Peter")




// const secret = "SUPER SECRET"
// const john = "John"
// const peter = "Peter"

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi("Susan")
// sayHi(john)
// sayHi(peter)


// In order to share/access the variables in app.js we will need to use require


const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// console.log(names)
// console.log(data)
// sayHi(names)

require('./7-mind-grenade')
// sayHi("Susan")
// sayHi(names.john)
// sayHi(names.peter)


// console.log(module.exports) // Output will be an empty object at first {}



