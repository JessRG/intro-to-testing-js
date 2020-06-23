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
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the value of 10', function () {
        expect(isEven(10)).toBe(true);
    });
    it('should return false when passed the value 7', function () {
        expect(isEven(7)).toBe(false);
    });
});

// Unit tests for sayHello
describe('sayHello', function () {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
});