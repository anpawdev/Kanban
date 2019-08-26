'use strict'

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '4336',
  'X-Auth-Token': '4fc5defc6a0b7c4692c4bdfbdd2c5a60'
};

fetch(baseUrl + '/board', { headers: myHeaders })
	.then(function(resp) {
    	return resp.json();
  	})
  	.then(function(resp) {
		setupColumns(resp.columns);
	})
	.catch(function(error) {
		console.log(error);
	});

//Create columns
function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

//Create cards
function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}

//Generate template
function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
};