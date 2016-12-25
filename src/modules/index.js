'use strict'
var Parser = require('./parsers')

var fs = require('fs')
fs.readFile('./src/modules/log.txt', function (err, logData) {
    if (err) throw err

    let logDataString = logData.toString()
    let parser = new Parser()
    let parseredText = parser.parser(logDataString)

    console.log(`Parsered: \n${JSON.stringify(parseredText)}`)
})