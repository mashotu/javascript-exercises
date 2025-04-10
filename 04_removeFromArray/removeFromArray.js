const removeFromArray = function(...args) {
    const [original, ...removeItems] = args;
    return original.filter(item => !removeItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
