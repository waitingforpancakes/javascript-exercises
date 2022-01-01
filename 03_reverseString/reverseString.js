const reverseString = function(str) {
    let strArray = str.split("");
    let temp = "";
    for(const letter of strArray){
        temp = letter + temp;
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;
