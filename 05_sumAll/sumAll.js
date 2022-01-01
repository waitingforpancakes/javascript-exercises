const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0){
        return "ERROR";
    }

    let sum = 0;
    let larger, smaller;
    if (num1 >= num2) {
        larger = num1;
        smaller = num2;
    } else {
        larger = num2;
        smaller = num1
    }
    for(; smaller <= larger; smaller++){
        sum += smaller;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
