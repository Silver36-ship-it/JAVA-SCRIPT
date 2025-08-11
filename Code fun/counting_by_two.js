function counting_by_twos(numbers){
new_array = []
for(let index = 2; index <= numbers; index++){
if(number % 2 == 0){
new_array.push(index)}
}
return new_array
}

let number = 10
console.log(counting_by_twos(number))