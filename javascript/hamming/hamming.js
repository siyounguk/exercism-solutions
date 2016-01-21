var Hamming = function(){}

Hamming.prototype.compute = function(a,b){
  var diffCount = 0;
  if(a.length != b.length){
    throw ("DNA strands must be of equal length.")
  }

  var aArray = a.split("");
  var bArray = b.split("");
  var diffsFound = 0;
  for (var i = 0; i < aArray.length; i++) {
      if((bArray[i] != aArray[i]) ) diffsFound++;
  }
  return diffsFound;
}

module.exports = Hamming;