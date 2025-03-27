class Support {
    name;
    #next;

    constructor(name) {
        this.name = name;
        this.#next = null;
    }

    setNext(next) {
        this.#next = next;
        return this.#next;
    }

    support(targetNumber) {
        if (this.resolve(targetNumber)) {
            return this.done(targetNumber);
        }
        
        if (this.#next) {
            return this.#next.support(targetNumber);
        }
        
        return this.notMatch(targetNumber);
    }

    getName() {
        return this.name;
    }

    resolve(targetNumber) {
        return false;
    }

    done(targetNumber) {
        return `Support for ${targetNumber} is resolved by ${this.getName()}`;
    }

    notMatch(targetNumber) {
        return `Support for ${targetNumber} could not be resolved.`;
    }

}
export default Support;