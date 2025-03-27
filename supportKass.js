import Support from "./support.js";

class SupportKass extends Support {
  constructor(name) {
    super(name);
  }

  resolve(targetNumber) {
    return targetNumber % 11 === 0;
  }
}
export default SupportKass;