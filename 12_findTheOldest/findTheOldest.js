const findTheOldest = function(people) {
    return people.reduce(function(previousOldest, currentPerson) {
        let currentAge;
        let oldestAge;
        let currentYear = new Date().getFullYear();

        if (!("yearOfBirth" in currentPerson) && !("yearOfDeath" in currentPerson)){
            currentAge = 0;
        } else if (!("yearOfDeath" in currentPerson)) {
            currentAge = +currentYear - currentPerson.yearOfBirth;
        } else {
            currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        
        if (!("yearOfBirth" in previousOldest) && !("yearOfDeath" in previousOldest)) {
            oldestAge = 0;
        } else if (!("yearOfDeath" in previousOldest)){
            oldestAge = +currentYear - previousOldest.yearOfBirth;
        } else {
            oldestAge = previousOldest.yearOfDeath - previousOldest.yearOfBirth;
        }

        if (currentAge > oldestAge) {
            return currentPerson;
        } else {
            return previousOldest;
        }
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
