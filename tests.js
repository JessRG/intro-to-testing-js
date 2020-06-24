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

// Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the value of 10', function() {
        expect(isEven(10)).toBe(true);
    });
    it('should return false when passed the value 7', function() {
        expect(isEven(7)).toBe(false);
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