var debug = require('debug');

var visitor = require('./visitor')

var print = debug('period');

function period(startTime, endTime) {
  	// period is defined by a start time and an end time
  	this.startTime = startTime || new Date();
  	this.endTime = endTime || this.startTime.setDate(this.startTime.getDate() + numberOfDaysToAdd);
}

period.prototype.toString = function() {
   	return ("period from: " + this.startTime.toString().slice(4, 15)  + " to: " + this.endTime.toString().slice(4, 15));
}

//visitrors is a visitor[]  
period.prototype.maxVisitors = function(visitors) {
	var times = [];
	var count = 0;
	var max = 0;

	//this loop is to take all the visitor in visitors whom wwere visiting during the period
	for (var i = 0; i < visitors.length; i++) {
		var v = visitors[i];
		if (v.departureTime > this.startTime || v.arrivalTime < this.endTime) {
			times.push({time: v.departureTime, value: -1});
			times.push({time: v.arrivalTime, value: 1});
		}
	};	

	findMax = function(max, value, index) {
		count += value;
		if(count > max) {
			max = count;
		}
		return max;
	}

	return times.sort(function(a, b){return a.time-b.time}).map(function(time) {return time.value}).reduce(findMax);
}

module.exports = period;