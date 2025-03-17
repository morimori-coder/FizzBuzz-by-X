import Support from "./support.js";

class SupportBuzz extends Support {
  constructor() {
    super();
    this.name = 'Buzz';
  }

  resolve(targetNumber) {
    return targetNumber % 5 === 0;
  }
}
export default SupportBuzz;