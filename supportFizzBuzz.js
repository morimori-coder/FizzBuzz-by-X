import Support from "./support.js";

class SupportFizzBuzz extends Support {
  constructor(name) {
    super(name);
  }

  resolve(targetNumber) {
    return targetNumber % 3 === 0 && targetNumber % 5 === 0;
  }
}
export default SupportFizzBuzz;