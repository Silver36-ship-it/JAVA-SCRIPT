function magic_number(number){
magic_number = 42
if(number == magic_number){
return 'You found the magic number!'}
else
return 'Keep looking!'
}

var prompt = require('prompt-sync')();
var user_input = prompt('Enter number: ')
console.log(magic_number(user_input))
