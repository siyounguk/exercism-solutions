var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(letters){
  var let ="";
  for(var i = 0; i < letters.length; i++){ 
    if (letters[i] === "C"){
      let += "G";
    }else if(letters[i] == "G"){
      let += "C";
    }else if(letters[i] == "A"){
      let += "U";
    }else if(letters[i] == "T"){
      let += "A";
    }
  }
  return let;
}

module.exports = DnaTranscriber;