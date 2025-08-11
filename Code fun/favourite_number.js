function favourite_number(guess_number){
const number = 7
if(guess_number == number) {
return 'Thats my favourite number!'}
else{ 
	return 'Nice try guess again!'}
	}

var prompt = require('prompt-sync')();
var user_input = prompt('Guess a number?: ')
console.log(favourite_number(user_input))