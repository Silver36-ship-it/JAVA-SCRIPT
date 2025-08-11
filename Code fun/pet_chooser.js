function pet_pick(pet_name){
if(pet_name == 'dog') {
return 'Woof!, Dogs are awesome!'
}else{ 
	return 'Cool choice, but i love dogs!'}
}

var prompt = require('prompt-sync')();
var favourite_pet = prompt('Do you prefer dog or cat?').toLowerCase()
console.log(pet_pick(favourite_pet))