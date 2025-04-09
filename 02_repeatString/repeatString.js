const repeatString = function(string, num) {
    repeatedString = [];
    if (num < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < num; i++) {
        repeatedString.push(string);
    }
    
    return repeatedString.join("");
};

// Do not edit below this line
module.exports = repeatString;
