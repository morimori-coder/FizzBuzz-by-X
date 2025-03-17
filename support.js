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
            this.done(targetNumber);
        } else if (this.#next) {
            this.#next.support(targetNumber);
        } else {
            this.notMatch(targetNumber);
        }

    }

    getName() {
        return this.name;
    }

    resolve(targetNumber) {
        return false;
    }

    done(targetNumber) {
        console.log(targetNumber + ': ' + this.getName());
    }

    notMatch(targetNumber) {
        if (this.#next === null) {
            console.log(targetNumber + ': not match');
        }
    }

}
export default Support;