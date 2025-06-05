# CODE TO REMAIN WITH THE FOLDER YOU ARE IN IN THE TERMINAL

function prompt { "PS " + (Split-Path -Leaf (Get-Location)) + "> " }

# LESSON 1 

CONTENT
1. Node Fundamentals
2. Express.js
3. MongoDB, Mongoose
4. Applications
5. Deployment


// Node.js
- Node.js is an environment to run JavaScipt outside of the browser
- Created in 2008
- Build on Chrome's V8 Js Engine - So every browser has an engine (A toll that compiles our code down to machine code) and chrome uses the V8 Js Engine

- With Node.js It's easier to build full stack Apps since It is easier and scalable and It uses JavaScript as the language.


Requirements
HTML, CSS, JS, ES6
Callbacks, promises, Async - Await


Node.js content
Intro
Install
Node Fundamentals
Express Tutorial
Building Apps


Browser

1. There's the DOM - tree like structure that has been arranged comprising of your HTML elements that JavaScript uses to manipulate your webpage for events, displaying web pages, etc

2. Window

3. Interactive Apps

4. No File Systems

5. Fragmentation

6. Es6 Modules

Node.js
1. No DOM - it is JavaScript running on your computer or server, not inside Chrome or Firefox
So:
There is no webpage, no <div>, no html
Therefore, there's no DOM and no document object
Node.js is great for building backend stuff (like handling data, making servers, reading files), not changing what's on the web page

2. No window because there is no browser
# So If we try to access the window, Node will spit back the error and most likely your app will crash.

3. Server side 

4. File systems

5. Versions

6. Common.js library


Download the LTS version (Long term support version)



# To only see the name of the root folder instead of the full path name, Type in  

function prompt {"nameoftherootfolder>" }


# To execute a file in Node.js, you can type 

node filename or node filename.js

⚙️ In Node.js (Server-side JavaScript)
There's no browser involved.

You write JavaScript, but it runs in Node’s engine (not in Chrome).

You have to run your code yourself, usually through:

the CLI using node yourfile.js, or

the <!-- REPL --> to test things line by line.

✅ You evaluate the code manually using node, because Node.js is not connected to a web page — it’s just running your code like a program.


🔥 Analogy Time:
Environment	    Who runs your code?	            Example
Browser	        The browser does it for you	    Open index.html in Chrome

Node.js	        You run it manually using node	Type node app.js in terminal

# 💡 Key Point:
In the browser, you see changes immediately in the UI.
In Node.js, you use the terminal to run, test, and print results — no UI, no DOM.



# CLI - command line interface

A place where you type commands and get results - Like your terminal or powershell


🧾 Simple Example:
# You open PowerShell or Terminal and type:

node hello.js

# That's you using the CLI to tell your computer

"Hey, run this Node.js file for me"

# REPL

REPL is a tool that lets you write JavaScript code line by line and see the result instantly

REPL - stands for Read, Eval Print Loop

Read - It reads what you type
Eval (Evaluate) - It runs your code
Print - It shows result
Loop - It waits for you to type again, and repeats


🧪 Example:
# In your terminal, type:

node

# You’ll see something like:

>


# Now type this:

2 + 3

# It will respond with:
5


# To clear the terminal in Node.js, we use Ctrl + L
# To exit the REPL, you type .exit or just type in Ctrl + C twice









🍓 Frameworks
Just like adding strawberry syrup or chocolate chips.

Express = like chocolate syrup → simple and smooth for building web apps.

NestJS = like layered sundae → structured, fancy, made for big apps.

Fastify = like sugar-free flavor → light and optimized.

🍦 Runtimes/Environments
Like serving your ice cream in a cone, cup, or even a milkshake.

Node.js = original cone

Deno = a newer cup with extra toppings (security, TypeScript built-in)

Bun = turbo milkshake — very fast, all-in-one.

🍫 Different Use Cases / Styles
Like eating ice cream at home, at a party, or at a fancy restaurant — same ice cream, different experience!

Use it for a backend server 🍽️

Use it to build a chat app with real-time messages 🗨️

Use it for creating automation scripts 🤖

Use it for CLI tools like making your own npm command 🛠️



Great catch, Bruce — that phrase "multiple flavors" in the context of Node.js modules usually means:

✅ There are different ways (styles) to write and use modules in Node.js — like different "flavors" of the same idea.

Let me break them down:





🍦 Flavor 1: CommonJS (Default in Node.js)
Uses require() and module.exports

Works out-of-the-box in most Node.js environments

Example:

// math.js
module.exports = function add(a, b) {
  return a + b;
};

// app.js
const add = require('./math');



🍨 Flavor 2: ES Modules (ESM) — modern JavaScript
Uses import and export

Requires "type": "module" in your package.json, or .mjs file extension

More like frontend JavaScript (browser-based code)

Example:


// math.mjs or math.js (if "type": "module")
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';







<!-- Why must you export?
When you use require() (or import), Node.js runs the entire module code once. But:

Only what you export (via module.exports or exports) is accessible to the file that required it.

Any functions or variables defined in the module but not exported are private to that module.

So, without exporting, other files can't directly use those functions or variables. -->

# math.js
function add(a, b) {
  return a + b;
}

# app.js
const math = require('./math');

console.log(math);          // Outputs: {}
console.log(math.add);      // Outputs: undefined
console.log(add(1, 2));     // ReferenceError: add is not defined


Why?
Because add was never exported, math is an empty object, and add is unknown outside math.js.


# Defining a function

So:
Defining a function = writing the code that says what the
function will do.

function greet() {
  console.log("Hello!");
}


# Invoking a function

# Invoking a function - running/calling or using the function — making it do its job.

greet(); // This is invoking the function, and it prints "Hello!"



