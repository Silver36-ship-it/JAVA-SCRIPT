function squared_number(numbers){
new_array = []
for(let index = 1; index <= numbers; index++){
new_array.push(index + ' squared is ' + index * index)
}
return new_array
}
let number = (1,2,3,4,5,6)
console.log(squared_number(number))