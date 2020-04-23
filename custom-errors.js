class ArgumentError extends Error {
    constructor(paramName, message = "Value is not valid.") {
        super(message);
        this.name = "ArgumentError";
        this.paramName = paramName;
        this.message = `${message} Parameter name: ${paramName == undefined ? "(no parameter)" : paramName}.`;
    }
}

class ArgumentNullError extends ArgumentError {
    constructor(paramName, message = "Value is null.") {
        super(paramName, message);
        this.name = "ArgumentNullError";
    }
}

class ArgumentUndefinedError extends ArgumentError {
    constructor(paramName, message = "Value is undefined.") {
        super(paramName, message);
        this.name = "ArgumentUndefinedError";
    }
}


module.exports.ArgumentError = ArgumentError;
module.exports.ArgumentNullError = ArgumentNullError;
module.exports.ArgumentUndefinedError = ArgumentUndefinedError;
