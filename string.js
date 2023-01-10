// ! String
// String is object
// it is primitive datatype
// string is set of characters
// here , each character has index (integer sequence)
// to check the length of string - str_ref.length
// we can access string characters with the help of square brackets ( str_ref[index] )
// String is encoded with UTF-16

//! Type of String
// 1 . Single Line String
//? by single quotes and double quotes
// 2 . Multi Line String
//? by backticks (` ${variable_name} `)
// console.log(str.length);

// ! Ways to create string
//? By new keyword and String constructor
// let str1 = new String("hello");
// here ,new String("hello") is creating a object and the value we are passing is loaded by contructor that the object
// the reference of object(String) is stored in strt1 variable

//! String Methods

let str =
  "Mahendra Singh Dhoni is an Indian former international cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is also the current captain of CSK in the IPL.";
//!        0123456789
// 1. toUpperCase() - it will return uppercased string
// 2. toLowerCase() - it will return lowercased string
// 3. indexOf(value,starting_index) - returns index or -1 if not avaiable
// 4. startsWidth(value) - return boolean
// 5. endsWidth(value) - return boolean
// 6. includes(value) - returns true or false
// 7. slice(starting_index,ending_index-1)
// 8. split(pattern)
//! it will split the string according to some pattern
//! it will return array of separated string
// 9. toString()
// .10. join(pattern)
//! it will convert array into string according to some pattern

// let result = str.split("").reverse().join("");
// console.log(result);
// console.log(str);
