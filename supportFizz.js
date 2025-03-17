import Support from "./support.js";

class SupportFizz extends Support {
  constructor() {
    super();
    this.name = 'Fizz';
  }

  resolve(targetNumber) {
    return targetNumber % 3 === 0;
  }
}
export default SupportFizz;