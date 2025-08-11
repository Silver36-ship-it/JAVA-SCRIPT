function positive_or_negative(number){
if(number > 0){
return 'Positive'}
else if(number <= 0){
return 'Negative or zero'}
else
	return 'Invalid input'
}	
var prompt = require('prompt-sync')();
var user_input = prompt('Enter number')
console.log(positive_or_negative(user_input))