'use strict'
var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World, from Node.js')
}).listen(8080)

console.log('Server running listening 8080, access http://localhost:8080')