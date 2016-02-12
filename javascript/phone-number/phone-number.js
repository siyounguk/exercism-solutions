var PhoneNumber = function (phone){
  this.phone = phone.replace(/\W/g, '');
}

PhoneNumber.prototype.number = function() {

  if(this.phone.length > 10 && this.phone[0] == 1){
    this.phone = this.phone.substr(1);
  }else if(this.phone.length !== 10){
    this.phone = "0000000000";
  }
  return this.phone;
};

PhoneNumber.prototype.areaCode = function(){
  return this.phone.substr(0, 3);
};

PhoneNumber.prototype.toString = function(){
  this.number = this.phone.substr(3, 3) + "-" + this.phone.substr(6, 4);
  return "(" + this.areaCode() + ") " + this.number;
};

module.exports = PhoneNumber;