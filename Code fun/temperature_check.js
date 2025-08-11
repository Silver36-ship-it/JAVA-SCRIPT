function temp_check(value){
if(value > 30){
return 'Hot!'}
else if(value >= 15 && value <= 30){
return 'Nice!'}
else if(value < 15){
return 'Cold!'}
}

var prompt = require('prompt-sync')();
var user_input = prompt('Enter temperature value: ')
console.log(temp_check(user_input))

