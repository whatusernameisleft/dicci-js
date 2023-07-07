class Factorial {
  
  constructor(num) {
    this.num = num
  }
  
  get result() {
    return this.factorial(this.num)
  }
  
  factorial(number) {
    switch (number) {
      case isNaN(number):
        return "The input is invalid."
        break
      case number <= 0:
        if (!Number.isInteger(number)) return "The input is not an integer."
        if (number < 0) return "The input isn't a valid number."
        if (number == 0) return 1
        break
      default:
        return number * this.factorial(number - 1)
        break
    }
  } 
  
}

module.exports = Factorial