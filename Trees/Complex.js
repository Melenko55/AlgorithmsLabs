function getComplexModule(complexNum) {
    return Math.sqrt(complexNum.real * complexNum.real + complexNum.imag * complexNum.imag);
}

module.exports = class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    // -1 - this < other
    // 0 - this == other
    // 1 - this > other
    compare(other) {
        if (getComplexModule(this) == getComplexModule(other)) {
            if (this.real == other.real) {
                return this.imag == other.imag ? 0 : this.imag > other.imag ? 1 : -1;
            }

            return this.real > other.real ? 1 : -1;
        } else {
            return getComplexModule(this) > getComplexModule(other) ? 1 : -1;
        }

    }

    toString() {
        return `${this.real} + ${this.imag}i`;
    }
}