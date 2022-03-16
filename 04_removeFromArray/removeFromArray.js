function checkArray(array, value){
  for (var i = 0; i < array.length; i++) {
      if((typeof array[i]==typeof value) && (array[i]==value))
      {
          array.splice(i, 1);
      }
    }
  }

const removeFromArray = function(array, valueOne, valueTwo, valueThree, valueFour) {
    checkArray(array, valueOne);
    checkArray(array, valueTwo);
    checkArray(array, valueThree);
    checkArray(array, valueFour);
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
