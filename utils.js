const { readFileSync, writeFileSync } = require("fs");
const questionRelativePath = 'question/input.txt'
const outpuitRelativePath = 'question/output.txt'
const getInputArrForSolutionDir = (solutionDirname) => {
    const questionAbsolutePath = solutionDirname + '/../' + questionRelativePath;
    const input = readFileSync(questionAbsolutePath , 'utf-8')
    const inputArr = input.split("\n");
    return inputArr;
}
const writeArrOutput = (arr, solutionDirname) => {
    const outputAbsolutePath = solutionDirname + '/../' + outpuitRelativePath;
    writeFileSync(outputAbsolutePath, arr.join('\n'))
}

const reverseString = str => str.split('').reverse().join('')

module.exports = { getInputArrForSolutionDir, reverseString, writeArrOutput }