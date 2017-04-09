var counter = 0;
var currentMove = '';

function displayMove() {
	$('.row').on('click', '.square', function() {
		var moveClass = this.className;	
		if (counter % 2 === 0) {	
			$(this).html('<p class="x">X</p>');
			currentMove = 'X';
			} 
		else {
			$(this).html('<p class="o">O</p>');
			currentMove = 'O';
			}	
		counter++;		
		getClassArray(moveClass);
		//checks if game is a tie once all moves have been made
		if (counter === 9) {
			declareTie();
		}
		});
	}

//turns the class of box that was selected from string to array
function getClassArray(string) {
	var classArray = string.split(' ');
	//removes square class, keeping it would cause other functions to be buggy
	classArray.splice(0, 1);
	getRows(classArray);
	}

//collects other divs with same class as the one that was selected
function getRows(token) {
	token.forEach(function(item) {
	var rowItems = document.getElementsByClassName(item);
	validateWin(rowItems, currentMove, item);
	});
}


function validateWin(validator, move, targetClass) {
	var pointCounter = 0;
	//checks if all divs in same row have same innerText (x or O)
	for (var i = 0; i < validator.length; i++) {
		if (validator[i].innerText.trim() === move) {
			pointCounter++;
			}
		}
	if (pointCounter === 3) {
		declareWinner(targetClass);
		}
	}

function declareWinner(c) {
	$('.square').each(function() {
		if ($(this).hasClass(c)) {
			$(this).addClass('winner');
		}
		});
	}

function declareTie() {
	//checks if there has been a winner
	if (!$('.square').hasClass('winner')) {
		$('.tie').show();
		}
	}

function restart() {
	$('.restart').on('click', 'button', function(e) {
		e.preventDefault();
		//clears all game data
		$('.square').empty();
		$('.square').removeClass('winner');
		$('.tie').hide();
		counter = 0;
	})
}

$(function() {
	displayMove();
	restart();
});