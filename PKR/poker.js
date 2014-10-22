var debug = require('debug');

var Deck = require('./deck');
var Card = require('./card');

var print = debug('main');

var deck = new Deck();

deck.distrib(10);

var player1 = new Deck();
var player2 = new Deck();

player1.cards = deck.cards.slice(0,5);
player2.cards = deck.cards.slice(5);

//STRAIGHT FLUSH
//player1.cards = [new Card(1,1), new Card(2,1), new Card(5,1), new Card(3,1), new Card(4,1)];
//player2.cards = [new Card(1,1), new Card(2,1), new Card(5,1), new Card(3,1), new Card(4,1)];

//SQUARE
//player1.cards = [new Card(8,1), new Card(4,1), new Card(8,1), new Card(8,1), new Card(8,1)];
//player2.cards = [new Card(8,1), new Card(4,1), new Card(8,1), new Card(8,1), new Card(8,1)];

//FULL
//player1.cards = [new Card(6,2), new Card(9,1), new Card(6,3), new Card(9,2), new Card(6,1)];
//player2.cards = [new Card(6,2), new Card(9,1), new Card(6,3), new Card(9,2), new Card(6,1)];

//FLUSH
//player1.cards = [new Card(7,1), new Card(2,1), new Card(12,1), new Card(4,1), new Card(9,1)];
player2.cards = [new Card(7,1), new Card(2,1), new Card(12,1), new Card(4,1), new Card(9,1)];

//STRAIGHT
//player1.cards = [new Card(6,4), new Card(9,1), new Card(7,1), new Card(10,2), new Card(8,1)];
//player2.cards = [new Card(6,4), new Card(9,1), new Card(7,1), new Card(10,2), new Card(8,1)];


print("----------------player1---------------");
print(player1.toString());
print(player1.score());

print("----------------player2---------------");
print(player2.toString());
print(player2.score());

diff = player1.compare(player2);

switch (diff) {
		case 1:
			console.log("player1 got " + player1.score() + "\n player2 got " + player2.score() + "\n player1 is a Champion");
			break;
		case -1:
			console.log("player1 got " + player1.score() + "\n player2 got " + player2.score() + "\n player2 is a winner");
			break;
		case 0:
			console.log("player1 got " + player1.score() + "\n player2 got " + player2.score() + "\n ..... Pocker Face .....");
			break;
		default : 
			console.log("player1 got " + player1.score() + "\n player2 got " + player2.score() + "\n Erreur: desk.compare() return: " + diff);
			break;
	}

