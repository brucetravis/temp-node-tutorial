// BUILD-IN modules
// 1. os
// 2. path
// 3. fs
// 4. http

// os
// This module provides information about the operating system

const os = require("os")


// console.log("Platform:", os.platform())
// // Output: Platform win32

// console.log("Architecture:", os.arch())
// // Output: Architecture: x64

// console.log("Free Memory:", os.freemem())
// // Output: Free Memory: 1709375488

// console.log("Total Memory:", os.totalmem())
// // Output: Total Memory: 8481501184

// console.log("Home directory:", os.homedir())
// // Output: Home directory: C:\Users\user


// Info about current User
const user = os.userInfo()
console.log(user)

// Output
//  [Object: null prototype] {   
//   uid: -1,
//   gid: -1,
//   username: 'user',
//   homedir: 'C:\\Users\\user',
//   shell: null
// }


// Method returns the systems uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

// Output:
// The system Uptime is 11376.953


const currentOs = {
    name: os.type(),
    relese: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

// Output
// {
//   name: 'Windows_NT',
//   release: '10.0.19045',
//   totalMem: 8481501184,
//   freeMem: 1887457280
// }






