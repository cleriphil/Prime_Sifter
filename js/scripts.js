var primeSift = function(number) {
  var numberList = []
  var spliceCounter = 0
  var spliceFlag = true
  for(var i = 2; i <= number; i++) {
    numberList.push(i);
  };

var finalNumberList = numberList.slice(); // allows us to modify new array without also modifying origional

  for(var i = 0; i < numberList.length; i++) {
    var currentNum = numberList[i];
      spliceFlag = true;
      for(var prime = 2; prime < currentNum; prime++) {  // prime is the index of the loop
        if (spliceFlag === true) {
           if (currentNum % prime === 0) {  // currentNum is looking at the original numberList
             finalNumberList.splice(i-spliceCounter, 1);
             spliceCounter++;
             spliceFlag = false; // forces (effective) exit of loop
          }
        }
      }
    }

return finalNumberList;
};
