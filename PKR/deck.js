var debug = require('debug');

var Card = require('./card');

var print = debug('Deck');

function Deck() {
  	// The card suit can have 4 value spade, heart, diamond or club
  	this.cards =  [];
}

Deck.prototype.toString = function() {
	var res = "Deck:";
    for (var i = 0; i < this.cards.length; i++) {
        res += "\n" + this.cards[i].toString();
    }
    return res;
}

//this function is to creat a deck with nb different card
Deck.prototype.distrib = function(nb) {
	var i = 0
 	while (i < nb) {
		var c = new Card();
		if(this.contain(c) === false) {
			this.cards.push(c);
			i++;
		}
	}		
}

Deck.prototype.contain = function(card) {
  	var i = 0;
  	while (i<this.cards.length) {
  		if (card.number===this.cards[i].number && card.suit===this.cards[i].suit) {
  			return true;
  		}
  		i++;
  	}
  	return false;
}

//this function is to get the Array of all the number of each card of the deck
Deck.prototype.getNumbers = function() {
	var numbers = [];
	for (var i = 0; i < this.cards.length; i++) {
		numbers.push(this.cards[i].number);
	};
	numbers.sort(function(a, b){return a-b});
	return numbers;
}

Deck.prototype.isFlush = function() {
	var suit = this.cards[0].suit;
	for (var i = 0; i < this.cards.length; i++) {
		if(this.cards[i].suit != suit) {
			return false;
		}
	};
	return true;
}

Deck.prototype.isStraight = function() {
	var numbers = this.getNumbers();

	for (var i = 1; i < numbers.length; i++) {
		if(numbers[i-1]+1!=numbers[i]) {
			return false;
		}
	};
	return true;
}

//This function is to get the Occ of each number of the Deck 
Deck.prototype.getNumOcc = function() {
	var numbers = this.getNumbers();
	var num = [];
	var occurance = [];
	var prev;
    
    for ( var i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] !== prev ) {
            num.push(numbers[i]);
            occurance.push(1);
        } else {
            occurance[occurance.length-1]++;
        }
        prev = numbers[i];
    }
    return occurance;
}

Deck.prototype.isSquare = function() {
	var occ = this.getNumOcc();

    if (occ.indexOf(4)>-1) {
    	return true;
    }
    return false;
}

Deck.prototype.isFull = function() {
	var occ = this.getNumOcc();
   
    if (occ.indexOf(3)>-1 && occ.indexOf(2)>-1) {
    	return true;
    }
    return false;
}

//this returne the value of the score 
Deck.prototype.score = function() {
	if (this.isStraight() && this.isFlush()) {
		print("STRAIGHT FLUSH");
		return 5;
	} else if (this.isSquare()) {
		print("SQUARE");
		return 4;
	} else if (this.isFull()) {
		print("FULL");
		return 3;
	} else if (this.isFlush()) {
		print("FLUSH");
		return 2;
	} else if (this.isStraight()) {
		print("STRAIGHT");
		return 1;
	};
	print("LOOSER !!!!!")
	return 0;
}

// return 1 if beter -1 if worse and 0 if equal
Deck.prototype.compare = function(deck) {
	var diff = this.score() - deck.score();
	if (diff > 0) {
		return 1;
	} else if (diff < 0) {
		return -1;
	};
	return diff;
}



module.exports = Deck;