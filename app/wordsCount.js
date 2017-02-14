'use strict'
const check = {
words : function (value) {
    var result = {};
    if (typeof value == 'string') {
        var splittedWords = value.split(/\s+/);
        splittedWords.forEach(function (element) {
            if (element) {
                if (typeof result[element] !== "undefined") {
                    result[element]++;
                } else {
                    result[element] = 1;
                }
            }
        }, this);

    }
    return result;
}
}
module.exports = check;