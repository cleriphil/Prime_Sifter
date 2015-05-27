var primeSift = function(number) {
  var numberList = []
  for(var i = 2; i < number; i++) {
    numberList.push(i);
  };

var finalNumberList = numberList.slice();

  for(var i = 0; i <= numberList.length; i++) {
    var currentNum = numberList[i];
      for(var prime = 2; prime < number; prime++) {

        if (currentNum === prime) {
        } else if (currentNum % prime === 0) {
           finalNumberList.splice(i, 1);
        }
      }
  }

return finalNumberList;




  // return numberList;
};
