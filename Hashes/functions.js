function isPrime(n) {
    if (n <= 1) {
        return false;

    }
    // check from 2 to n-1
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
10.233232
const getSignMantissaExponent = (value) => {
    let sign = Math.sign(value)
    let exp = value.toString().split('.')
    if (!exp[1]) return [sign, value, 1]

    return [sign, sign < 0 ? -(+exp[0]) : +exp[0], +exp[1]]
}

module.exports = {

    getPrime: (number) => {
        let i = number + 1
        while (!isPrime(i)) {
            i++
        }
        return i
    },
    getRandomElement: (p) => Math.floor(Math.random() * p),
    hashHelper: (value, a, b, c, p, hashes) => {
        const [sign, mantissa, exp] = getSignMantissaExponent(value)
        console.log(`Value: ${value}`);

        let index = ((a * mantissa + b * exp + (sign >= 0 ? sign : -sign + 1) * c) % p) % hashes.length
        console.log(`index: ${index}`);
        if (hashes[index]) {
            hashes[index].push(value)
        } else {
            hashes[index] = [value]
        }
    }
}
