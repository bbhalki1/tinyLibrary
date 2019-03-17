module.exports = function replace(string) {
    if (typeof string !== "string") {
        throw new TypeError("I need a string");
    }
    return string.replace(/\s/g, "");

}