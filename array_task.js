let user = [
  {
    name: "A",
    age: 18,
    marital_status: "married",
    gender: "m",
  },
  {
    name: "B",
    age: 17,
    marital_status: "unmarried",
    gender: "m",
  },
  {
    name: "C",
    age: 20,
    marital_status: "married",
    gender: "f",
  },
  {
    name: "D",
    age: 38,
    marital_status: "unmarried",
    gender: "m",
  },
  {
    name: "E",
    age: 21,
    marital_status: "married",
    gender: "f",
  },
  {
    name: "F",
    age: 18,
    marital_status: "married",
    gender: "m",
  },
  {
    name: "G",
    age: 34,
    marital_status: "unmarried",
    gender: "m",
  },
  {
    name: "H",
    age: 17,
    marital_status: "married",
    gender: "m",
  },
];

// 1. Create duplicate array (new_arr).

let new_arr = [...user];
// console.log(new_arr);
//! Note :  Work with duplicate array only
// 2. Print name and gender of unmarrieds.

// new_arr.map(value => {
//   if (value.marital_status === "unmarried") {
//     console.log(value.name + " - " + value.gender);
//   }
// });

// 3. Print name and gender of marrieds whose age is less than 18 .
// new_arr.map(value => {
//   if (value.marital_status === "married" && value.age < 18) {
//     console.log(value.name + " - " + value.gender);
//   }
// });
// 4. If age is less than 18 , then add property to the object
//   { eligible_for_marriage : "false" }
new_arr = new_arr.map(value => {
  if (value.age < 18) {
    value.eligible_for_marriage = "false";
  } else {
    value.eligible_for_marriage = "true";
  }

  if (value.gender === "m") {
    value.gender = "male";
  } else {
    value.gender = "female";
  }

  return value;
});

// console.log(new_arr[2]);

// console.log(new_arr);

// 5. If age is greater than 17 , then add property to the object
//   { eligible_for_marriage : "true" }
// 6. In object , gender is mentioned as "m" and "f"  ->
// change "m" to "male"
// and change "f" to "female"
// 7. Add a function to every object such that , whenever we call the function it should print updated gender ("male" and "female") and eligible_for_marriage and name

new_arr = new_arr.map(value => {
  value.details = function () {
    console.log(
      `name- ${this.name} ---  Gender- ${this.gender} ---- ele - ${this.eligible_for_marriage}`
    );
  };
  return value;
});

// console.log(new_arr[2].details());

// 8. Delete object at 3rd index

new_arr.splice(3, 1);
// console.log(new_arr);

// 9. Update the original array with all new properties

user = [...new_arr];
// console.log(user);
// console.log(user);
// 10. Print the data of each object

user.map(value => {
  console.log(value.name);
  console.log(value.age);
  console.log(value.gender);
  console.log(value.marital_status);
  console.log("-----------------");
});
