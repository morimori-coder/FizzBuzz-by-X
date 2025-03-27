import Support from "./support.js";

class SupportFizz extends Support {
  constructor(name) {
    super(name);
  }

  resolve(targetNumber) {
    return targetNumber % 3 === 0;
  }
}
export default SupportFizz;