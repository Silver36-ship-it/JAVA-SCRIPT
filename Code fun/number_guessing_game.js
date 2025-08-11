function number_guess(number){
let num = number
const secret = 8
while num != secret{
var prompt = require('prompt-sync')();
var user_input = prompt('Enter number: ')
return 'Try again!' }
if(number == secret){
return 'Correct!'
}
}
var prompt = require('prompt-sync')();
var user_input = prompt('Enter number: ')
console.log(number_guess(user_input))
