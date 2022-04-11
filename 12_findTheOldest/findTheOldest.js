const findTheOldest = function(people) {

  let oldest = people[0];
  let currentDate = new Date();

  for (var i = 0 ; i < people.length; i++) {

    if(typeof people[i].yearOfDeath === 'undefined')
    {
      people[i].yearOfDeath = currentDate.getFullYear();
    }

    if((oldest.yearOfDeath-oldest.yearOfBirth)<(people[i].yearOfDeath-people[i].yearOfBirth))
    {
      oldest = people[i];
    }
  }
  return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
