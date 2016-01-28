var Gigasecond = function (newDate){  
  this.startDate = newDate;
};

Gigasecond.prototype.date = function() {  
  start = new Date(this.startDate);
  startSeconds = start.getTime() / 1000;
  return new Date((startSeconds + Math.pow(10, 9)) * 1000);
};

module.exports = Gigasecond;
