const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function compareDescending(a, b) {
    return b - a;
}

function sortDescending(arr) {
    return arr.slice().sort(compareDescending);
}

function printSortedArray(arr) {
    console.log("Sorted in descending order:", arr);
}

rl.question('Enter numbers separated by spaces: ', (input) => {
    const inputNumbers = input.split(' ').map(Number);
    const sortedNumbers = sortDescending(inputNumbers);
    printSortedArray(sortedNumbers);
    rl.close();
});
