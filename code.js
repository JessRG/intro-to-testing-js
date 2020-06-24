// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// isEven function
function isEven(num) {
    // if (num === 2) {
    //     return true;
    // }
    // if (num === -4) {
    //     return true;
    // }
    // if (num === 3) {
    //     return false;
    // }
    // if (num === "banana") {
    //     return false;
    // }
    // if (num === "8") {
    //     return true;
    // }
    // if (num === Infinity) {
    //     return false;
    // }
    // if (typeof num === 'boolean') {
    //     return false;
    // }
    // if (num === undefined) {
    //     return false;
    // }
    // return true;
    return parseFloat(num) % 2 === 0;
}

// sayHello function
// Exercise 6
function sayHello(str) {
    // if (str === 'Alex') {
    //     return `Hello, Alex!`;
    // } else if (str === 'Pat') {
    //     return 'Hello, Pat!';
    // } else {
    //     return `Hello, Jane!`;
    // }
    // if (str === undefined) {
    //     return 'Hello, World!';
    // }
    // if (str === true) {
    //     return 'Hello, World!';
    // }
    // if (str === false) {
    //     return 'Hello, World!';
    // }
    // if (str === "") {
    //     return "Hello, World!";
    // }
    // if (typeof parseFloat(str) === 'number') {
    //     return "Hello, World!"
    // }
    if (str && isNaN(str)) {
        return `Hello, ${str}!`;
    } else if (typeof str == 'number') {
        return 'Hello, World!'
    } else {
        return 'Hello, World!';
    }
}

// isFive function
function isFive(num) {
    // if(parseFloat(num) === 5) {
    //     return true;
    // }
    // else if (num === 5) {
    //     return true;
    // } else {
    //     return false;
    // }
    return parseFloat(num) === 5;
}