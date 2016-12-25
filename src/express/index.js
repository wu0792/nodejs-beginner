'use strict'
var express = require('express')
var app = express()

app.use(express.static(`${__dirname}/public`))

app.listen(8080)
console.log('Server running listening 8080, access http://localhost:8080/photo.jpg')