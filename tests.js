// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for sayHello
//  Exercise 7 (add, commit, and push)
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    // Exercise 2
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    // Exercise 3
    it('should return "Hello, Jane!" when passed the value "Jane"', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    // Exercise 4
    it('should return "Hello, Alex!" when passed the value "Alex"', function() {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    // Exercise 5
    it('should return "Hello, Pat!" when passed the value "Pat"', function() {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    // Exercise 8
    it('should return "Hello, World!" when no value is passed', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed the value true', function() {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed the value false', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed the value null', function() {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed an empty string', function() {
        expect(sayHello("")).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed a number', function() {
        expect(sayHello(2.3)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed a numeric string', function() {
        expect(sayHello("5")).toBe('Hello, World!');
    });
}); // Exercise 9 (add, commit, and push)

// Unit tests for isFive
// Exercise 10
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    // Ensure that isFive returns a boolean no matter what the input
    // Ensure that isFive returns true when passed 5
    // What about if we pass in the string "5"? Do you want isFive to return true for that?
    // If so, write the test, ensure that the test is failing, and then write the implementation
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed the value 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when passed the numeric string '5'", function () {
        expect(isFive('5')).toBe(true);
    });
});

// Unit tests for the isEven function
// Exercise 11
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    // returns a boolean no matter the input
    // returns true when executed with isEven(2)
    // returns true when executed with isEven(-4)
    // returns false when executed with isEven(3)
    // returns false when called with isEven("banana")
    // returns true when called with isEven("8")
    // returns false when called with isEven(Infinity)
    // return false when called with a boolean input like isEven(true) or isEven(false)
    // returns false when called without an argument like isEven()
    it('should return a boolean value', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the value of 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the value -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the value 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with isEven("banana")', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with isEven("8")', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with isEven(Infinity)', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});

// Unit tests for the isVowel function
// Exercise 12
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    // Assert that:
    // isVowel always returns a boolean
    // isVowel("a") returns true
    // isVowel("A") returns true
    // isVowel("y") returns false
    // isVowel(4) returns false
    // isVowel(true) or isVowel(false) both return false
    // isVowel("banana") returns false
    // isVowel() returns false
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when called with isVowel("a")', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when called with isVowel("A")', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true when called with isVowel("y")', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed the value 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called with a boolean value', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when called with isVowel("banana")', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});

// Unit tests for the add function
// Exercise 13
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    // Assert that add:
    // add(2, 3) returns 5
    // add(-3, -9) returns -12
    // add("5", 6) returns 11
    // add("-4", "10") returns 6
    // add("banana", "split") returns NaN
    // add(2, "apples") returns NaN
    // add() returns NaN
});