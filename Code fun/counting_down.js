function countdown(countNumber){
new_array = []
for(let index = countNumber; index >= 1; index--){
new_array.push(index)
}
return new_array
}

let number = 100
console.log(countdown(number))

