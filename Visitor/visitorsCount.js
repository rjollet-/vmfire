var debug = require('debug');

var visitor = require('./visitor')

var print = debug('VisitorsCount');

function VisitorsCount() {
  	// VisitorsCount is defined by a start time and an end time
  	countTab = [];
}

VisitorsCount.prototype.toString = function() {
	var res="";
	for (var i = 0; i < this.countTab.length; i++) {
		res = res.concat("------------");
		res = res.concat("\ntime: " + this.countTab[i].time.toString());
		res = res.concat("\nvalue: " + this.countTab[i].value);
		res = res.concat("\n");
	};
   	return res;
}


VisitorsCount.prototype.initialize = function(visitors) {
	print("initialize");
	var dStart = new Date();
	var times = [];
	var res = [];
	var iRes = 0;

	//this loop is to take all the visitor in visitors whom wwere visiting during the period
	for (var i = 0; i < visitors.length; i++) {
		times.push({time: visitors[i].departureTime, value: -1});
		times.push({time: visitors[i].arrivalTime, value: 1});
	};	

	times.sort(function(a, b){return a.time-b.time});

	res[iRes] = times[0];

	for (var i = 1; i < times.length; i++) {
		times[i].value += res[iRes].value;
		if (times[i].time > res[iRes].time) {
			iRes++;
			res[iRes] = times[i];
		} else{ 
			res[iRes] = times[i];
		}
	};
	/*
	while (times.length > 0) {
		var time = times.shift();
		time.value += res[iRes].value;
		if (time.time > res[iRes].time) {
			iRes++;
			res[iRes] = time;
		} else{ 
			res[iRes] = time;
		}
		print(iRes);
	};
	*/
	this.countTab = res;
	var dEnd = new Date();
	print("time to initialize:");
	print(dEnd - dStart);
}

VisitorsCount.prototype.findMax = function(startTime, endTime) {
	print("findMax");
	var dStart = new Date();
	var i = 0;
	var max = 0;
	if (startTime>this.countTab[this.countTab.length-1].time || endTime<this.countTab[0]) {
		return ("Error: cannot find startTime and endTime are not in the scope");
	}
	while(startTime < this.countTab[i].time && i < this.countTab.length) {
		i++;
	}
	while(endTime > this.countTab[i].time && i < this.countTab.length) {
		if(max < this.countTab[i].value) {
			max = this.countTab[i].value;
		}
		i++;
	}
	var dEnd = new Date();
	print("time to find max:");
	print(dEnd - dStart);
	return max;
}

module.exports = VisitorsCount;
