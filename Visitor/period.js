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
		if (visitors[i].departureTime > this.startTime || visitors[i].arrivalTime < this.endTime) {
			times.push({time: visitors[i].departureTime, value: -1});
			times.push({time: visitors[i].arrivalTime, value: 1});
		}
	};	

	times.sort(function(a, b){return a.time-b.time});

	//count +1 for each visitor who go in and -1 for each visitor who go out and save the max
	for (var i = 0; i < times.length; i++) {
		count += times[i].value;
		if(count > max) {
			max = count;
		}
	};
	return max;
}

module.exports = period;