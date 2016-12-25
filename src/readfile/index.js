'use strict'

var fs = require('fs')
fs.readFile('log.txt', function (err, logData) {
    if (err) throw err

    let logDataString = logData.toString()
    console.log(`Raw: \n${logDataString}`)
})