const fs = require('fs')
const path = require('path')

const getFileContent = function (name) {
    const filePath = path.join(__dirname, name)
    return fs.readFileSync(filePath, { encoding: 'utf-8' })
}

let pattern = getFileContent("pattern.txt")
let input = getFileContent("input.txt")

let patternParts = pattern.split('\n')
let inputParts = input.split('\n')

// первое условие
const compareFirstCase = function (inputParts, patternParts) {
    for (let inputLine of inputParts) {
        inputLine = inputLine.trim()
        for (let patternLine of patternParts) {
            patternLine = patternLine.trim()
            if (inputLine === patternLine) {
                console.log(inputLine)
                break
            }
        }
    }
}
// 2 условие
const compareSecondCase = function (inputParts, patternParts) {
    for (let inputLine of inputParts) {
        inputLine = inputLine.trim()
        for (let patternLine of patternParts) {
            patternLine = patternLine.trim()
            if (inputLine.includes(patternLine)) {
                console.log(inputLine)
                break
            }
        }
    }
}

const isDiffDistanceOne = function (s1, s2) {
    const m = s1.length
    const n = s2.length

    if (Math.abs(m - n) > 1)
        return false

    let count = 0

    let i = 0
    let j = 0
    while (i < m && j < n) {
        if (s1.charAt(i) != s2.charAt(j)) {
            if (count == 1)
                return false
            if (m > n)
                i++
            else if (m < n)
                j++
            else {
                i++
                j++
            }
            count++
        }
        else {
            i++
            j++
        }
    }

    if (i < m || j < n)
        count++

    return count == 1
}
// 3 условие
const compareThirdCase = function (inputParts, patternParts) {
    for (let inputLine of inputParts) {
        inputLine = inputLine.trim()
        for (let patternLine of patternParts) {
            patternLine = patternLine.trim()
            if (isDiffDistanceOne(inputLine, patternLine)) {
                console.log(inputLine)
                break
            }
        }
    }
}
console.log("Case 1:")
compareFirstCase(inputParts, patternParts)
console.log("Case 2:");
compareSecondCase(inputParts, patternParts)
console.log("Case 3:");
compareThirdCase(inputParts, patternParts)