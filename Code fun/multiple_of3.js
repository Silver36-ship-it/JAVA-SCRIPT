function multiply_by_three(number){
new_array = []
for(let index = 1; index <= number; index++){
if(index % 3 == 0)
new_array.push(index)}
return new_array
}

let number1 = 15
console.log(multiply_by_three(number1))
