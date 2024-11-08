const readline = require('readline');
const { processText } = require('./src/step');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a word or sentence: ", (input) => {
    processText(input);
    rl.close();
});