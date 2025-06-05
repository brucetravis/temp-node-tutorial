// // fs - file system
// // - Use for interacting with the file system (read/write files)


// // const fs = require('fs')


// // writing a file
// // SYNTAX
// // fs.writeFileSync(Filename, Message)

// fs.writeFileSync('./content/subfolder/write.txt', 'Hello, my name is Node.js')

// // Reading a file
// const data = fs.readFileSync('./content/subfolder/write.txt', 'utf8')
// console.log(data)


// // OUTPUT
// // Hello, my name is Node.js


// // 2ND Flavour os second way to do it
// const { readFileSync, writeFileSync } = require('fs')


// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// // console.log(first, second)

// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result : ${first} : ${second}`
// )




// const { readFileSync } = require('fs')


// It is the same aas doing 
// const fs = require('fs')
// fs.readFileSync()


// So this is more efficient when coding
// const { readFileSync } = require('fs')

// const { readFileSync, writeFileSync } = require('fs')

// The same as
// const fs = require('fs')

// fs.readFileSync()
// fs.writeFileSync()


const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync ('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result ${first} : ${second}`,
    { flag: 'a' }
)

console.log('Done with this task.')
console.log('Starting the next task.')








