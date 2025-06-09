// const http = require('http')

// // set up a server that listens for incoming requests. req and 
// // res represent incoming requests and outgoing responses 
// // Web servers always listen for requests
// const server = http.createServer((req, res) => {
//     // This line logs the request when It is received. This means that 
//     // nothing is logged until the user visits port 5000 or sends a request via 
//     // other tools like postman or curl
//     // console.log(req)

//     if (req.url === '/') {
//         res.end('Welcome to Our Home Page')
//     } else if (req.url === '/about') {
//         res.end('Heres our short History.')
//     } else {
//         res.end(`
//             <h1>Ooops!</h1>
//             <p>We can't seem to find the page you are looking for</p>
//             <a href='/'>back home</a>
//         `)
//     }
//     // res.write('Welcome to Our Home Page')
//     // // This tells the browser, “I’m done sending data.”
//     // res.end()

// })

// // This line listens for requsts, right now It is Idle
// server.listen(5000)

// // Check the result in the search engine t port 5000. It will say 'Welcome to Our Home Page'



const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)

    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is our short History.')
    } else {res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page youa re looking for</p>
        <a href='/'>back home</a>
    `)}

})


server.listen(5000) //listen for a request in port 5000


