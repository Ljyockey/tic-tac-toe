var counter = 0;
var currentMove = '';

function displayMove() {
	$('.row').on('click', '.square', function() {
	var moveClass = this.className;	
	if (counter % 2 === 0) {	
		$(this).html('<p>X</p>');
		currentMove = 'X';
		}
	else {
		$(this).html('<p>O</p>');
		currentMove = 'O';
		}
	counter++;		
	getClassArray(moveClass);
})
}

function getClassArray(string) {
	var classArray = string.split(' ');
	classArray.splice(0, 1);
	getRows(classArray);
}

function getRows(token) {
	token.forEach(function(item) {
	var rowItems = document.getElementsByClassName(item);
	validateWin(rowItems, currentMove);
	})
}

function validateWin(validator, move) {
	console.log(validator);
}


$(function() {
	displayMove();
})