function password_check(password){
const right_password = 'secret123'
if(password == right_password) {
return 'Access granted!, Welcome!'}
else 
	return 'Access denied!'
}

var prompt = require('prompt-sync')();
var user_input = prompt('Enter password: ')
console.log(password_check(user_input))