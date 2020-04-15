class ArgumentError extends Error {
    constructor(message = "Value is not valid.") {
        super(message);
        this.name = "ArgumentError";
    }
}

class ArgumentNullError extends ArgumentError {
    constructor(message = "Value is null.") {
        super(message);
        this.name = "ArgumentNullError";
    }
}

class ArgumentUndefinedError extends ArgumentError {
    constructor(message = "Value is undefined.") {
        super(message);
        this.name = "ArgumentUndefinedError";
    }
}


module.exports.ArgumentError = ArgumentError;
module.exports.ArgumentNullError = ArgumentNullError;
module.exports.ArgumentUndefinedError = ArgumentUndefinedError;