var debug = require('debug');

var Visitor = require('./visitor');
var Period = require('./period');

var print = debug('main');

console.log("--------------------VISITORS--------------------")

var visitors = [	new Visitor(new Date(2014,10,1), new Date(2014,10,7))
				,	new Visitor(new Date(2014,10,1), new Date(2014,10,19))
				,	new Visitor(new Date(2014,10,4), new Date(2014,10,13))
				,	new Visitor(new Date(2014,10,5), new Date(2014,10,9))
				,	new Visitor(new Date(2014,10,6), new Date(2014,10,11))
				,	new Visitor(new Date(2014,10,8), new Date(2014,10,19))
				,	new Visitor(new Date(2014,10,8), new Date(2014,10,15))
				,	new Visitor(new Date(2014,10,12), new Date(2014,10,16))
				,	new Visitor(new Date(2014,10,14), new Date(2014,10,17))
				,	new Visitor(new Date(2014,10,17), new Date(2014,10,18))
				]

for (var i = 0; i < visitors.length; i++) {
	console.log(visitors[i].toString());
};

console.log("--------------------------Period--------------------------")

var period = new Period(new Date(2014,10,3), new Date(2014,10,18));

console.log(period.toString());

console.log("-------------------MAX------------------")

console.log(period.maxVisitors(visitors));