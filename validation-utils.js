var errors = require('./custom-errors');

/**
* Represents methods that can be used to ensure that parameter values meet expected conditions.
*/
class Ensure {
    /**
     * Ensures that the value of a parameter is not null.
     * @throws ArgumentNullError
     */
    static isNotNull(value, paramName) {
        if (value === null) throw new errors.ArgumentNullError(paramName);
    }

    /**
     * Ensures that the value of a parameter is not undefined.
     * @throws ArgumentUndefinedError
     */
    static isNotUndefined(value, paramName) {
        if (value === undefined) throw new errors.ArgumentUndefinedError(paramName);
    }

    /**
     * Ensures that the string value of a parameter is not null or empty.
     * @param {string} value
     * @param {string} paramName
     * @throws ArgumentError
     */
    static isNotNullOrEmpty(value, paramName) {
        if (value === null || value.length == 0) throw new errors.ArgumentError(paramName, "String value is null or empty.");
    }

    /**
     * Ensures that one number value of a parameter greater then another.
     * @param {number} value
     * @param {number} comparand
     * @throws ArgumentError
     */
    static isGreaterThan(value, comparand, paramName) {
        if (value <= comparand) throw new errors.ArgumentError(paramName, `${value} is not greater then ${comparand}.`);
    }

    /**
     * Ensures that the number value of a parameter is greater then zero (0).
     * @param {number} value
     * @throws ArgumentError
     */
    static isGreaterThanZero(value, paramName) {
        if (value <= 0) throw new errors.ArgumentError(paramName, `${value} is not greater then zero(0).`);
    }

    /**
     * Ensures that the value of a parameter is number (and not NaN).
     * @param {number} value
     * @throws ArgumentError
     */
    static isNumberAndNotNaN(value, paramName) {
        if (typeof value !== 'number' || isNaN(value)) throw new errors.ArgumentError(paramName, `${value} is NaN or not a number.`);
    }

    /**
     * Ensures that the value of a parameter is in some range.
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @throws ArgumentError
     */
    static isBetween(value, min, max, paramName) {
        this.isNumberAndNotNaN(value);
        if (value < min || value > max) throw new errors.ArgumentError(paramName, `${value} is not between ${min} and ${max}.`);
    }
}

module.exports = Ensure;