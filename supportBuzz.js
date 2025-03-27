import Support from "./support.js";

class SupportBuzz extends Support {
  constructor(name) {
    super(name);
  }

  resolve(targetNumber) {
    return targetNumber % 5 === 0;
  }
}
export default SupportBuzz;