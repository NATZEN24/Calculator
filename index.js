
class Calculator {
  constructor(PI, E) {
    this.PI = PI;
    this.E = E;
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width 
 * @returns Height based on the ratio x:y
 */
  ratio(x, y, width) {
    return (width * y) / x;
  }
  /**
   * 
   * @param {Number} x 
   * @param {Number} y 
   * @returns Calculation of percentage
   */
  percentage(x, y) {
    if (y === 0) {
      return `Error: Divisor cannot be zero`;
    } else {
      const result = (x / y) * 100;
      return `The result is ${result}%`;
    }
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns Sum of two numbers
 */
  add(x, y) {
    return x + y;
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns Subtracted number
 */
  subtract(x, y) {
    return y - x;
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns Multiplied number
 */
  multiply(x, y) {
    return x * y;
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns Divided number
 */
  divide(x, y) {
    if(y===0){
        return `Division by 0 is not allowed`;
    }else{
    return x / y;
    }
  } 
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns Remainder of x divided by y
 */
  modulate(x, y) {
    if (y === 0) {
      return `Error: Divisor cannot be zero`;
    } else {
      return x % y;
    }
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns Power of x raised to y
 */
  elevate(x, y) {
    return x ** y;
  }
/**
 * 
 * @param {Number} x 
 * @returns Square root of a number
 */
  sqrt(x) {
    if (x < 0) {
      return `Error: Cannot calculate the square root of a negative number`;
    } else {
      return x ** 0.5;
    }
  }
}
const calc = new Calculator();
console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.modulate(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5

