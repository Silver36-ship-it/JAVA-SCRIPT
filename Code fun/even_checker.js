function even_checker(number){
new_array = []
for(index = 1; index <= number; index++){
if(index % 2 == 0){
new_array.push(index)}
}
return new_array
}

var prompt = require('prompt-sync')();
var user_input = prompt('Enter number: ')
console.log(even_checker(user_input))