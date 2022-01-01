const removeFromArray = function() {
    let args = Array.from(arguments);
    let arr = args[0];
    for(let i = 1; i < args.length; i++){
        let deleteIndex;
        for(let j = 0; j < arr.length; j++){
            if (arr[j] === args[i]){
                deleteIndex = j;
            }
        }
        if(deleteIndex || deleteIndex == 0){
            arr.splice(deleteIndex, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
