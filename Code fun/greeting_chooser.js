function greeting(name){
if(name == 'alex') {
return 'Hello, friend!'
}else{ 
	return 'Hi, stranger!'}
	}
	
var prompt = require('prompt-sync')();
var user_input = prompt('What is your name?').toLowerCase()
console.log(greeting(user_input))