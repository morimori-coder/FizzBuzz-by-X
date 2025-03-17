import Support from "./support.js";

class SupportQuzz extends Support {
  constructor() {
    super();
    this.name = 'Quzz';
  }

  resolve(targetNumber) {
    return targetNumber % 7 === 0;
  }
}
export default SupportQuzz;