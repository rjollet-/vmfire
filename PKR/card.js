var debug = require('debug');

var print = debug('Card');

function Card(number,suit) {
  	// The number of a card is from 1 to 13
  	this.number = number || Math.floor((Math.random() * 13) + 1);

  	// The card Suit can have 4 value spade, heart, diamond or club
  	this.suit = suit || Math.floor((Math.random() * 4) + 1);
}

Card.prototype.toString = function() {
   	return ("Suit: " + this.nameSuit()  + " number: " + this.number);
}
 
Card.prototype.nameSuit = function() {
	switch (this.suit) {
		case 1:
			return "spade";
		case 2:
			return "heart";
		case 3:
			return "diamond";
		case 4:
			return "club";
		default : 
			return "Erreur: numero Suit not from 1 to 4"
	}
}

module.exports = Card;