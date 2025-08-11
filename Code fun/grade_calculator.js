function grade_calculator(grade_score){
if(grade_score < 0 && grade_score > 100){
return 'Invalid input'}
else if(grade_score >= 90){
return 'A!'}
else if(grade_score >= 80 && grade_score <= 89){
return 'B!'}
else if(grade_score >= 70 && grade_score <= 79){
return 'C!'}
else if(grade_score < 70){
return 'F!'}
else
return 'Invalid input'
}


var prompt = require('prompt-sync')();
var user_input = prompt('Enter score: ')
console.log(grade_calculator(user_input))


