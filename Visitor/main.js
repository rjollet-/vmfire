var debug = require('debug');

var Visitor = require('./visitor');
//var Period = require('./period');

var VisitorsCount = require('./visitorsCount');

var print = debug('main');

var dStart = new Date();
print("--------------------VISITORS--------------------")

var visitors = [];



for (var i = 0; i < 1000000; i++) {
	visitors.push(new Visitor(new Date(2014,10,2), new Date(2014,10,19)));
	visitors.push(new Visitor(new Date(2014,10,4), new Date(2014,10,13)));
	visitors.push(new Visitor(new Date(2014,10,5), new Date(2014,10,9)));
	visitors.push(new Visitor(new Date(2014,10,6), new Date(2014,10,11)));
	visitors.push(new Visitor(new Date(2014,10,8), new Date(2014,10,19)));
	visitors.push(new Visitor(new Date(2014,10,8), new Date(2014,10,15)));
	visitors.push(new Visitor(new Date(2014,10,12), new Date(2014,10,16)));
	visitors.push(new Visitor(new Date(2014,10,14), new Date(2014,10,17)));
	visitors.push(new Visitor(new Date(2014,10,17), new Date(2014,10,18)));
	visitors.push(new Visitor(new Date(2014,10,3), new Date(2014,10,16)));
};

for (var i = 0; i < visitors.length; i=i+50000) {
	print(visitors[i].toString());
	print(visitors[i+1].toString());
	print(visitors[i+2].toString());
	print(visitors[i+3].toString());
	print(visitors[i+4].toString());
	print(visitors[i+5].toString());
	print(visitors[i+6].toString());
	print(visitors[i+7].toString());
	print(visitors[i+8].toString());
	print(visitors[i+9].toString());
};


print("--------------------------Period--------------------------");

//var period = new Period(new Date(2014,10,3), new Date(2014,10,18));

var vTree = new VisitorsCount();
vTree.initialize(visitors);

print(vTree.toString());

print("-------------------MAX------------------")

print(vTree.findMax(new Date(2014,10,2), new Date(2014,10,19)));
print(vTree.findMax(new Date(2014,10,5), new Date(2014,10,6)));
print(vTree.findMax(new Date(2014,10,7), new Date(2014,10,10)));
print(vTree.findMax(new Date(2014,10,11), new Date(2014,10,19)));
print(vTree.findMax(new Date(2014,10,4), new Date(2014,10,8)));

var dEnd = new Date();
print(dEnd - dStart);
