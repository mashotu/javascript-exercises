const reverseString = function (string) {
    let arr = [];
    for (let i = 0, j = string.length; i < j; i++) {
        arr.push(string.charAt(i));
    }

    return (arr.reverse()).join("");
};


// Do not edit below this line
module.exports = reverseString;
