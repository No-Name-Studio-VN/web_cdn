(function (global) {
    /** Check if an input is a valid string, which does not include only spaces or empty
     * @param {string} str
     * @returns {boolean}
     */
    function isString(str) {
        // If there is no string, or the string is empty, or the string length is smaller than 1, return false
        return str && str.trim() && str.length > 0;
    }

    global.ValidationHandler = {
        isString
    };

})(window);