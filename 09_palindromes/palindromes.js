const palindromes = function (str) {
    // Get rid of capitals
    str = str.toLowerCase();

    // Get rid of spaces and compare
    let forward = str.split(" ");
    let forwardConcat = forward.reduce(function(previousWords, word) {
        let temp = word.split("");
        let forwardWord = temp.reduce(function(previousLetters, letter) {
            if (!letter.match(/^[.,:!?]/)) {
                return previousLetters + letter;
            } else {
                return previousLetters;
            }
        }, "");
        return previousWords + forwardWord;
    }, "");
    let backwardConcat = forwardConcat.split("").reduce(function(previousLetters, letter) {
        return letter + previousLetters;       
    }, "");

    return forwardConcat == backwardConcat;
};

// Do not edit below this line
module.exports = palindromes;
