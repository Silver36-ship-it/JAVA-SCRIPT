function guess_the_animal(guess_animal){
const my_animal = 'dog'
if(guess_animal == 'dog'){
return 'Correct! it is a dog!'}
else
	return 'Nope!, it is a dog'
	}
	
var prompt = require('prompt-sync')();
var user_input = prompt('Guess animal name?: ').toLowerCase()
console.log(guess_the_animal(user_input))
