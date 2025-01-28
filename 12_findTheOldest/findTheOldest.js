const findTheOldest = function(people) {

    const oldestPerson = people.reduce((oldest, person) => {

        const currentAge = new Date().getFullYear();

        const personAge = (person.yearOfDeath || currentAge) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentAge) - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
 
    return oldestPerson;

};


const people = [

    {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },


];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
