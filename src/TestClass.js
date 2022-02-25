/**
 * This is a test class that shows how to make public and private variables and methods
 * @module MyClass
 */

/** @const {String} [verb to use later] */
const CONST_1 = "likes";

/** My class to mess around with */
class MyClass {
    // private variables are declared before class constructor
    #secret;

    /**
     * parameters needed to create this object
     * @param  {[str]} name of person
     */
    constructor(name) {

        // name that can be accessed outside of class
        /** @public */
        this.name = name;

        // secret variable that can only be accessed in class
        /** @private */
        this.#secret = "bananas";
    }

    /** Public method that calls a private method using a constant and private variable */
    method_one() {
       console.log(this.#method_three(CONST_1 + " " + this.#secret));
    }

    /**
     * public method that receives an object that must include a name
     * @param  {Object} randomObject      [object, doesnt really matter what]
     * @param  {String} randomObject.name [same object with variable name]
     * @return {String}            [prefix phrase with input]
     */
    method_two(randomObject) {
        return "he likes " + randomObject.name;
    }

    /**   
     * private method to use elsewhere
     * @private
     * @param  {String} str [string to append at end]
     * @return {String}     [complete string]
     */
    #method_three(str) {
       return "I think " + this.name + " " + str;
    }
}
module.exports = MyClass;