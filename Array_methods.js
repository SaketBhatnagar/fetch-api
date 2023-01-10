//! foreach(function(value,index,array))
// it is higher order function
// array_name.foreach((value,index,arr)=>{})
// forEach does not return anything  -> it will return undefined
//

// let result = arr.forEach((value, index, array) => {
//   value = value + 10;
//   console.log(value);
// });

// console.log(result);
// console.log(arr);

// ! Array methods

//? 1. push(element) methods
//? it insert the element at last of array (array.length)
//? push() methods returns length of array

//? 2. pop() method
//? it removes the element from last of array (on array.length-1)
//? it returns the deleted element

//? 3. shift() method
//? it removes the element from starting of array (that is from 0th index)
//? it returns the deleted element

//? 4. unhift(element) method
//? it insert the element at starting of array (on 0th index)
//? unshift() methods returns length of array

//! 5. splice( a,b,c)
//! a -> starting index
//! b -> number of elements
//! c -> value you want to insert
//? we can insert element
//? we can delete element
//? we can replace element
//? original array is modified
//? it returns array of deleted elements

//!6. slice(a,b)
//! a -> starting index
//! b -> ending index - 1
//? it does not modify original array
// ? it is used to copy the array elements
// ? if second argument is not passed , by default it's value will be index = array.length
//? it returns array of copied elements

//! 7. reverse()
// it will reverse the array
// it will return reversed array

//! 8. flat(depth)
//! Array FLattening
// the process of reducing the dimensionality of array , we are reducing array
// to 1-D array
// TO do so we have array.flat(depth) method
//? depth -> number of arrays inside array
//? be default -> depth is set to 1
// array_name.flat()

// let arr = [
//   1010,
//   20,
//   30,
//   [100, [1000, 2000], 200, 300],
//   ["dhgasj", "askjgasj"],
//   40,
//   50,
// ];

// [10,20,30,100,1000,2000,200,300,40,50]

//! 9 Array.isArray(value)
// it will check given value is array or not
// ? if it is array it will return true
//? else -> false

// let res = arr.flat();
// console.log(res);
// console.log(Array.isArray(8));

//!10 Array.from(value)
// it will accept the value and convert into a array
// After convertion it retruns it

//! 11. sort()
// used to perform sorting in array

// let res = arr.sort((a, b) => b - a);
// descending

// res = arr.sort((a, b) => a - b);
// ascending

//! ECMA script - advanced Javascript
//! 12. map() ,filter(),reduce()
//? map(callback)
//? it is used to iterate over array , and on each iteration it will retrun a value
//? the returned value will be inserted into new array
//? it retruns new array
//? it will not modify original array
//! array_name.map((value,index,array)={})

let arr = [10, 203, "hi", 50, 100, 1, 40, "hello"];
// let res = arr.map((value, index, array) => {
//   return 10 * value;
// });

let res = arr.filter((value, index, array) => typeof value === "string");
//? it is used to iterate over array , and on each iteration it will insert a value into new array
// ! if filter() returns true
// ! else value if not inserted into new array
// ? it returns new array

console.log(arr);
console.log("-----------------------------------------");
console.log(res);
