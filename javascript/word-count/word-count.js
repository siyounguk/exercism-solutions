var Words = function(){
}

Words.prototype.count = function(string) {
  string = string.replace(/(\r\n|\n|\r|\t|\s\s)/gm," ").trim();

  stringArray = string.split(" ");
  var counts = {};
  var wordsArray = [];
  var numArray = [];

  for(i =0; i< stringArray.length; i++){
    var num = stringArray[i];
    counts[num] = (+counts[num] || 0) + 1; 
    counts[num] = parseInt(counts[num]);
    wordsArray.push(stringArray[i]);
    numArray.push(counts[num]);
  }

  makeObject = function (keys, vals) {
    return object = keys.reduce (
      function(prev, val, i) { prev[val] = vals[i]; return prev; }, 
        {});
  }

  makeObject(wordsArray, numArray);
  return object;
};

module.exports = Words;