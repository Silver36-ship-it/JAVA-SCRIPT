function age_restriction(age_limit){
if(age_limit >= 10){
	return 'Welcome to the show!'}
 else if(age_limit < 10){
 	return 'Sorry,you are too young!'}
 else
 	return 'Invalid input'
 	}

var prompt = require('prompt-sync')();
var user_input = prompt('What is your age?: ')
console.log(age_restriction(user_input))