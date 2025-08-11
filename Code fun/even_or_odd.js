function even_or_odd(numbers){
new_array = []
if(numbers % 2 == 0) {
return 'Even!'}
else if(numbers % 2 != 0){ 
	return 'Odd!'}
	}
	
var prompt = require('prompt-sync')();
var number = prompt('Enter number: ')
console.log(even_or_odd(number))