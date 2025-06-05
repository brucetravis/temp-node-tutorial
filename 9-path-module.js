// 2. psth - File Path Utilities
// Help work with file and directory paths



// const path = require('path')

// const filePath = '/home/user/index.js'

// console.log("Base name: ", path.basename(filename)) // index.js
// console.log("Dir name: ", path.dirname(filename)) // /home/user
// console.log("Extension: ", path.extname(filename)) // .js


// const path = require('path')
// console.log(path.sep)

// // Output
// // \

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)


// const base = path.basename(filePath)
// console.log(base)

// // Output:
// // test.txt


// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

// // C:\Users\user\OneDrive\Documents\CODE_RHYTHM\Node.js\projects\tutorial\content\subfolder\test.txt



const path = require("path")
console.log(path.sep)


const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// Note: You can use a custom separator instead of "\" (backslash in windows) and forward slash ("/") in (MacOs)

const base = path.basename(filePath) 
// This gives me the last part of the path which is called the base, typically/usually the filename 
console.log(base)

// ⚙️ What path.basename() does:
// It extracts the file name from the full path.

// You can optionally also remove the file extension like this:


const nameWithoutText = path.basename(filePath, "txt")
console.log(nameWithoutText)

// Since path.basename, typically/usually basename gives me the full path, I 
// can also remove the extension by providing two arguments. 
// SYNTAX: path.basename(fileName, extension)


const absolute = path.resolve(__dirname, 'content', "subfolder", "test.txt")
console.log(absolute)


// 🔧 path.resolve()
// path.resolve() in Node.js is used to build an absolute path by resolving a sequence of path segments.

// ✅ It does two things:
// Joins paths (like path.join()).

// Resolves to an absolute path (starts from root).


// path.resolve([...paths])


// const path = require('path');

// const resolvedPath = path.resolve('folder', 'file.txt');
// console.log(resolvedPath);


// If your current directory is:
// C:\Users\Bruce\project


// This will output:
// C:\Users\Bruce\project\folder\file.txt

// Because path.resolve() starts from your current working directory when no absolute path is in the list.


// ⚠️ But Be Aware:
// While path.join() is very forgiving, it doesn't resolve to an absolute path unless the first segment is already absolute.

// For that, you'd use:
// path.resolve('folder', 'file.txt')


// 🏆 Conclusion:
// Yes — path.join() is your best friend for building file paths safely, especially for local or relative file paths.


