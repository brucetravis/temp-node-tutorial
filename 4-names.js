// Modules

// We wil split our code in modules. This is for complex apps

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


// local
const secret = "SUPER SECRET"
// share
const john = "John"
const peter = "Peter"


// console.log(module)

// You fill notice an object with a property known as exports
// It works like this, whatever yuu dump in exports you will be able to 
// access It anywhere in the application

module.exports = { john, peter }

// module.exports = secret

// console.log(module)

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi("Susan")
// sayHi(john)
// sayHi(peter)