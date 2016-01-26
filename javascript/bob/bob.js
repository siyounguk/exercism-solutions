//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  var numb = input.match(/\d/g);
  var letter = input.match(/[a-zA-Z]/);
 
  if(letter == null && numb == null){
    return "Fine. Be that way!";
  }else if((input == input.toUpperCase() && letter == null) && (input.indexOf("?") != -1)){
    return "Sure.";
  }else if ((input == input.toUpperCase() && letter == null) && numb != null ){
    return "Whatever.";
  }else if ((input == input.toUpperCase()) || (input == input.toUpperCase() && numb!= null)){
    return "Whoa, chill out!";
  }else if(input.indexOf("?") != -1 && input.slice(-1) == "?"){
    return "Sure.";
  }else{
    return "Whatever.";    
  }
};

module.exports = Bob;
