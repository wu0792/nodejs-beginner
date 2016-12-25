'use strict'

class Parser{
    parser(text){
        let lines = text.split('\n')
        let results = {}

        lines.forEach((item) => {
            let entryList = item.split(' ')
            let type = entryList[1]
            let count = +entryList[2]

            if(!results[type]){
                results[type] = 0
            }

            results[type] += count
        })

        return results
    }
}

module.exports = Parser