import Calculator from '../Calculator'

import IsAnyEven from '../IsAnyEven'

describe("Calculator", () => {
  it("executes code", () => {
    expect(true).toBe(true);
  })

  describe("can do addition", () => {
    it("should return the sum of 2 numbers in an array", () => {
      const result1 = Calculator([2, 3]);

      expect(result1).toBe(5);

      /**/
      const result2 = Calculator([3, 3]);

      expect(result2).toBe(6);
      /***/
    })

    /**/
    it("should return the sum of 4 numbers", () => {
      const result1 = Calculator([1, 2, 3, 4]);

      expect(result1).toBe(10);
    })


    it("should return the sum of 4 even numbers", () => {
      const result1 = Calculator([2, 4, 6, 8]);

      expect(result1).toBe(20);
    })
    /**/
  })

  describe("can do subtraction", () => {

  })

  /** Assignment */
  describe("can do multiplication", () => {

  })

  /**
   * Challenge
   * 
   * clue: modulo operator %
   * 
   * or 
   */
  describe("can detect if any number entered is an even number", () => {
    it("should return true if there exists an even number among the inputs", () => {
      const result1 = IsAnyEven([1,2,3])

      expect(result1).toBe(true);
    })

    it("should return false if no even number exists among the inputs", () => {
      const result1 = IsAnyEven([1,3,5])

      expect(result1).toBe(false);
    })
  })
})