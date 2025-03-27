import Support from "./support.js";
import SupportFizz from "./supportFizz.js";
import SupportBuzz from "./supportBuzz.js";
import SupportFizzBuzz from "./supportFizzBuzz.js";
import SupportQuzz from "./supportQuzz.js";
import SupportKass from "./supportKass.js";

const support = new Support("Support");
const supportFizz = new SupportFizz("Fizz");
const supportBuzz = new SupportBuzz("Buzz");
const supportFizzBuzz = new SupportFizzBuzz("FizzBuzz");
const supportQuzz = new SupportQuzz("Quzz");
const supportKass = new SupportKass("Kass");

support.setNext(supportFizzBuzz).setNext(supportFizz).setNext(supportBuzz).setNext(supportQuzz).setNext(supportKass);

Array.from({ length: 100 }, (_, i) => i + 1).map(num => {
    const result = support.support(num);
    console.log(result);
});
