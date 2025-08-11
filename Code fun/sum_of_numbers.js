function sum_of_numbers(numbers){
let count = 0
for(let index = 1; index <= numbers; index++){
count += index
}
return count}

let number = 10
let total_number = sum_of_numbers(number)
console.log('The Sum is ' + total_number)