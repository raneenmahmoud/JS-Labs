/*
//Method 1:  at()
// This method takes one parameter (index)
// Usage: This method used to get element in specific index in array, takes positive and negative values
//Return element of specified index
//Example

const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`At index ${index} the item is ${array1.at(index)}`);//8
index = -2;
console.log(`At index ${index} the item is ${array1.at(index)}`);//130
//------------------------------------------------------------------------------

//Method 2:  copyWithin()
// This method takes one parameter(target)or two parameter(target,start)or three parameters(target,start,end)
//target->index at which copy element
//start->index which its element copied
//end->index for ending  
// Usage: This method used to copy element from array to specific position
//Return updated array
//Example

const array1 = [5, 12, 8, 130, 44];//length = 5
// console.log(array1.copyWithin(-1));//(target)-1+(length)5=4 //[130, 44, 8, 130, 5]
// console.log(array1.copyWithin(0,3));//[130, 44, 8, 130, 44]
console.log(array1.copyWithin(1,3,4));//[5, 130, 8, 130, 44]
//------------------------------------------------------------------------------

//Method 3:  every()
// This method takes one parameter(result_function)
// Usage: This method used to check all elements in the array achieved specific condition
//Return boolean value
//Example

const isachieve = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 20];
console.log(array1.every(isachieve));//true
//------------------------------------------------------------------------------

//Method 4:  some()
// This method takes one parameter(result_function)
// Usage: This method used to check at least one element in the array achieved specific condition
//Return boolean value
//Example

const isachieve = (currentValue) => currentValue < 40;
const array1 = [100, 300, 309, 80, 10, 55];
console.log(array1.every(isachieve));//true
//-----------------------------------------------------------------------------

//Method 5:  flat()
// This method takes no parameter or one parameter(depth), default is 1
//depth->number of nested arrays
// Usage: This method used to simplify nested arrays
//Return new simle array
//Example

const array1 = [1, , 3, ["a", , ["d", , "e"]]];//length = 3
console.log(array1.flat()); // [ 1, 3, "a", ["d", empty, "e"] ] //length = 4
console.log(array1.flat(2)); // [ 1, 3, "a", "d", "e"] //length = 5
//----------------------------------------------------------------------------

//Method 6:  reverse()
// This method takes no parameter 
// Usage: This method used to reverse specific array
//original array is reserved also
//Return  reversed array
//Example

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);//['one', 'two', 'three']
const reversed = array1.reverse();
console.log('reversed:', reversed);//['three', 'two', 'one']
console.log('array1:', array1);//['three', 'two', 'one']
//-----------------------------------------------------------------------------

//Method 7:  sort()
// This method takes no parameter 
// Usage: This method used to sort specific array converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//Return  sorted array
//Example

//{const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);}?????????????
const array1 = [5,80,8,2,94];
array1.sort();
console.log('sorted:', array1);//['three', 'two', 'one']
//-----------------------------------------------------------------------------

//Method 8:  map()
// This method takes (arrow_function) 
// Usage: This method used to assign new values to elmemnts of specific array under arrow function
//Return  new array with updayed values
//Example

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log("numbers: " + numbers)//[1, 4, 9]
console.log("roots: " + roots); //[1, 2, 3]
//-----------------------------------------------------------------------------

//Method 9:  fill()
// This method takes one parameter (value) or two parameters(value,start)or three parameters(value,start,end) 
//value->value which fill in specific position
//start->index where start put new value
//end->index where end put new value
// Usage: This method used to assign new values to elmemnts of specific array under arrow function
//Return  new array with updayed values
//Example

const array1 = [1, 2, 3, 4, 5];
//fill value 6 to all positions in the array
console.log(array1.fill(6));//[6, 6, 6, 6, 6]
//fill value 6 from position 2 till position 4 
console.log(array1.fill(6, 2, 4));//[1, 2, 6, 6, 5]
// Fill value 5 from position 1 till last position in array
console.log(array1.fill(5, 1));//[1, 5, 5, 5, 5]
//-----------------------------------------------------------------------------

//Method 10:  forEach()
// This method takes one parameter (arrow_function) 
//arrow_function-> for specific condition for all elements in array
// Usage: This method used to looping all elements of array and implement specific condition for each loop for each element 
//Return  new array with updayed values
//Example
// const items = ["item1", "item2", "item3"];
// const copyItems = [];
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.log(copyItems)//["item1", "item2", "item3"]
const array = [1, 3, 7];
let count = 0;
array.forEach((element) => {
  console.log({ element });//each element alone
  count++;
});
console.log({ array });//[1, 3, 7]
//--------------------------------------------------------------------------
*/




