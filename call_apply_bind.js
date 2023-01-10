let obj1 = {
  name: "Arvind",
  age: 22,
};

let obj2 = {
  name: "Abhishek",
  age: 21,
};

let print_details = function (a, b) {
  console.log(`i am ${this.name} and age is ${this.age}`);
  console.log(`a : ${a} ${b}`);
};

//! function_reference.call(object_ref,arg1,agr2,agr3.....argn)

//! function_reference.apply(object_ref,[arg1,agr2,agr3.....argn])

//! function_reference.bind(object_ref,arg1,agr2,agr3.....argn)

// print_details.call(obj2, 10, 20, 30, 40, 50);
// print_details.call(obj1, 100, 200);

// apply(object,[arg1,arg2,agr3,....argn])
// print_details.apply(obj1, [10, 20, 30]);

// bind(object)
// it will return a function binded with the reference of object

let f1 = print_details.bind(obj1);
// function (a, b) {
//   console.log(`i am ${obj1.name} and age is ${obj1.age}`);
//   console.log(`a : ${a} ${b}`);
// };
f1();

let result = print_details.call(obj2);
console.log(f1);
