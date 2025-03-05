import Calculator from '../Calculator'

describe("Calculator", () => {
  it("executes code", () => {
    expect(true).toBe(true);
  })

  describe("can add 2 numbers", () => {
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
})