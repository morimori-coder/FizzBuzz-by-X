import Support from "./support.js";

class SupportKass extends Support {
  constructor() {
    super();
    this.name = 'Kass';
  }

  resolve(targetNumber) {
    return targetNumber % 11 === 0;
  }
}
export default SupportKass;