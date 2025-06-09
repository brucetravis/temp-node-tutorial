// npm - global command, comes wih node
// npm --version

// local dependency - Use It only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//  package.json - manifest file (stores important info about project/package)
//  manual approach (create package.json in the root, create properties etc)
//  npm init (step by step, press enter to skip)
//  npm init -y (everything default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello people')

// Right! To run a custom script like your "running" script, you need to use:

// npm run running

// Not just npm running. The npm command expects predefined commands like start, test, etc., but for custom script names, you always prefix with run.

// So in your case:
// npm run running


// If you want "running" to execute that file with Node.js, change your script to:

// "running": "node 7-mind-grenade.js"

// Then run:

// npm run running


// Exactly! You've got it.

// Commands like start, test, stop, and a few others are special built-in npm scripts. You can run them directly with just npm start or npm test — no need for run in between.

// For any custom script names you define yourself (like "running", "build", "deploy"), you have to type npm run running or npm run build because npm doesn’t recognize those commands as built-in.

// So:

// npm start → runs the "start" script automatically

// npm test → runs the "test" script automatically

// npm run myscript → runs your custom "myscript"


// for custom command, include dev before the command name
// for normal command, don't include dev before the command name


// "dev": "nodemon app.js" // automatically restarts my script, I do not need to restart my server 
// everytime results appear automatially as sooon as I save.











