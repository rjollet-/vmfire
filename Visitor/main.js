var debug = require('debug');

var Visitor = require('./visitor');
var Period = require('./period2');

var print = debug('main');

var dStart = new Date();
console.log("--------------------VISITORS--------------------")

var visitors = [];



for (var i = 0; i < 1000000; i++) {
	visitors.push(new Visitor(new Date(2014,10,1), new Date(2014,10,7)));
	visitors.push(new Visitor(new Date(2014,10,5), new Date(2014,10,9)));
}

console.log("--------------------------Period--------------------------")

var period = new Period(new Date(2014,10,3), new Date(2014,10,18));

console.log(period.toString());

console.log("-------------------MAX------------------")

console.log(period.maxVisitors(visitors));
var dEnd = new Date();
console.log(dEnd - dStart);
