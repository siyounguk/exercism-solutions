var Pangram = function(sentence){
  this.sentence = sentence
}


Pangram.prototype.isPangram = function() {
  
  var letters = this.sentence.replace(/\W/g, '').toLowerCase().split('');
  var counter = 0;
  var alphabet = [];
  for(i=97; i<= 122; i++){
    alphabet.push(String.fromCharCode(i));    
  }

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (alphabet[j] === letters[i]){
        var index = alphabet.indexOf(alphabet[j]);
        alphabet.splice(index, 1);
        counter += 1;
      }
    }
  }
  if(counter === 26){
    return true;
  }else{
    return false;
  }
};

module.exports = Pangram;