function traffic_light(colors){
const color_red = 'red'
const color_green = 'green'
if(colors == color_red) {
return 'Stop!'}
else if(colors == color_green){
	return 'Go!'}
else if(colors == 'yellow'){
	return 'Wait!'}
else return 'Invalid input'
}


var prompt = require('prompt-sync')();
var user_input = prompt('Enter a color? Red or Green: ').toLowerCase()
console.log(traffic_light(user_input))