var errors = require('./custom-errors');

/**
* Represents methods that can be used to ensure that parameter values meet expected conditions.
*/
class Ensure {
    /**
     * Ensures that the value of a parameter is not null.
     * @throws ArgumentNullError
     */
    static isNotNull(value) {
        if (value === null) throw new errors.ArgumentNullError();
    }

    /**
     * Ensures that the value of a parameter is not undefined.
     * @throws ArgumentUndefinedError
     */
    static isNotUndefined(value) {
        if (value === undefined) throw new errors.ArgumentUndefinedError();
    }

    /**
     * Ensures that the string value of a parameter is not null or empty.
     * @param {string} value
     * @throws ArgumentError
     */
    static isNotNullOrEmpty(value) {
        if (value === null || value.length == 0) throw new errors.ArgumentError("String value is null or empty.");
    }

    /**
     * Ensures that one number value of a parameter greater then another.
     * @param {number} value
     * @param {number} comparand
     * @throws ArgumentError
     */
    static isGreaterThan(value, comparand) {
        if (value <= comparand) throw new errors.ArgumentError(`${value} is not greater then ${comparand}.`);
    }

    /**
     * Ensures that the number value of a parameter is greater then zero (0).
     * @param {number} value
     * @throws ArgumentError
     */
    static isGreaterThanZero(value) {
        if (value <= 0) throw new errors.ArgumentError(`${value} is not greater then zero(0).`);
    }

    /**
     * Ensures that the value of a parameter is number (and not NaN).
     * @param {number} value
     * @throws ArgumentError
     */
    static isNumberAndNotNaN(value) {
        if (typeof value !== 'number' || isNaN(value)) throw new errors.ArgumentError(`${value} is NaN or not a number.`);
    }

    /**
     * Ensures that the value of a parameter is in some range.
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @throws ArgumentError
     */
    static isBetween(value, min, max) {
        this.isNumberAndNotNaN(value);
        if (value < min || value > max) throw new errors.ArgumentError(`${value} is not between ${min} and ${max}.`);
    }
}

module.exports = Ensure;