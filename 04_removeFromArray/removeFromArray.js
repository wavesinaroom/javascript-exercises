
const removeFromArray = function(array, valueOne, valueTwo, valueThree, valueFour) {
  for (var i = 0; i < array.length; i++) {
      if((typeof array[i]==typeof valueOne) && (array[i]==valueOne))
      {
          array.splice(i, 1);
      }
  }

  for (var i = 0; i < array.length; i++) {
    if((typeof array[i]==typeof valueTwo) && (array[i]==valueTwo))
    {
        array.splice(i, 1);
    }
  }

  for (var i = 0; i < array.length; i++) {
    if((typeof array[i]==typeof valueThree) && (array[i]==valueThree))
    {
        array.splice(i, 1);
    }
  }

  for (var i = 0; i < array.length; i++) {
    if((typeof array[i]==typeof valueFour) && (array[i]==valueFour))
    {
        array.splice(i, 1);
    }
  }



  return array;
};

removeFromArray([1,2,3,4],3);
removeFromArray([1,2,3,4],3,2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
