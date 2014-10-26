var debug = require('debug');

var print = debug('Visitor');

function Visitor(arrivalTime, departureTime) {
  	// Visitor is defined by an arrival time and an departure time
  	this.arrivalTime = arrivalTime ;
  	this.departureTime = departureTime ;
}

Visitor.prototype.toString = function() {
   	return ("arrived at: " + this.arrivalTime.toString().slice(4, 15)  + " left at: " + this.departureTime.toString().slice(4, 15));
}
 
Visitor.prototype.leftAt = function(time) {
	this.departureTime = time || new Date();	
}

module.exports = Visitor;