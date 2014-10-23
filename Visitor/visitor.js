var debug = require('debug');

var print = debug('Visitor');

function Visitor(arrivalTime, departureTime) {
  	// Visitor is defined by an arrival time and an departure time
  	this.arrivalTime = arrivalTime || new Date();
  	this.departureTime = departureTime || null;
}

Visitor.prototype.toString = function() {
   	return ("arrived at: " + this.arrivalTime.toString().slice(4, 15)  + " left at: " + this.departureTime.toString().slice(4, 15));
}
 
Visitor.prototype.leftAt = function(time) {
	this.departureTime = time || new Date();	
}

module.exports = Visitor;