import Support from "./support.js";

class SupportQuzz extends Support {
  constructor(name) {
    super(name);
  }

  resolve(targetNumber) {
    return targetNumber % 7 === 0;
  }
}
export default SupportQuzz;