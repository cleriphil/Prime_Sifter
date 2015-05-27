var primeSift = function(number) {
  var numberList = []
  var spliceCounter = 0
  for(var i = 2; i <= number; i++) {
    numberList.push(i);
  };

var finalNumberList = numberList.slice(); // allows us to modify new array without also modifying origional

  for(var i = 0; i < numberList.length; i++) {
    var currentNum = numberList[i];
      for(var prime = 2; prime < currentNum; prime++) {  // prime is the index of the loop
         if (currentNum % prime === 0) {  // currentNum is looking at the original numberList
           finalNumberList.splice(i-spliceCounter, 1);
           spliceCounter++;
           break; // forces exit of loop
          }
      }
    }

return finalNumberList;
};

$(document).ready(function() {
  $('form#number').submit(function(event) {
    $('#result').show();
    var inputNum = ($('input#number')).val();
    var resultNums = primeSift(inputNum);

    resultNums = resultNums.join(', ');

    $(".result_nums").text(resultNums);


    event.preventDefault();
  });
});
