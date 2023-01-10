//!  DOM methods to target html elements
//!1. By ID
// document.getElementById("id_name");
// it will return single element

//! 2. By class
// here we target element by classname
// it will return HTMLCOLLECTION
// to access element we can use index

// let p = document.getElementsByClassName("item")[0];

// p.style.backgroundColor = "red";
// for (value of p) {
// }
// console.log(p);

//! 3. By tagname
// here we target element by tagname
//  it will return HTMLCOLLECTION
// to access element we can use index
// let p = document.getElementsByTagName("p");

// console.log(p[2]);

//! 5. by css query- single element
// it will target element by css query
// it will return first element that will match with query
// document.querySelector("css_query")

// let p = document.querySelector("a[href='https://www.google.com']");
// p.style.color = "blue";
// p.style.textDecoration = "none";
// p.href = "https://www.amazon.com";

//! 6. by css query all elements
// document.querySelectorAll("css_query")
// it will return Nodelist of all elements those will match css query
// let p = document.querySelectorAll("a[href]");
// let links = [
//   "https://www.google.com",
//   "https://www.amazon.com",
//   "https://www.flipkart.com",
// ];

// for (let i = 0; i < links.length; i++) {
//   p[i].href = links[i];
// }

//! create Html Element
//? document.createElement("element_name")
// it will retrun html element
// after creating element we have to insert

//! insert Element
//! 1. reference_object.insertAdjacentElement("position",element)
//! poisition -
// "beforebegin", "afetrbegin",
// "afterend", "beforeend"

//! 2. appendChild(element)
// it will insert element as last child

// let div = document.createElement("div");

// document.body.appendChild(div);

let div = document.querySelector("div");
let p = document.createElement("div");

// p.textContent = "hello , text";
p.innerHTML = "<h1> hello, i am innerHtml1</h1>";
p.innerHTML += "<h1> hello, i am innerHtml2</h1>";
p.innerHTML += "<h1 class='hello'> hello, i am innerHtml3</h1>";

// div.insertAdjacentElement("afterbegin", p);
// console.log(div);

//! textcontent
// it is used to insert text in the element

//!innerHTML
// it is used to insert text and html element in the element

// targeting
// creating element
// insertion
// insert text and element
// remove
p = document.querySelectorAll("p");
// p[0].remove();
// remove()
// it will remove the element from DOM

// console.log(p);

// how to setAttribute("attr_name","value")
// how to removeAttribute("attr_name")
//! insert multiple classes
//? classList.add("class_name")
//? classList.remove("class_name")

// p[1].setAttribute("class", "chombi");
// p[1].classList.add("chombu");
// p[1].classList.add("dingi");
// p[1].classList.remove("dingi");

// p[1].removeAttribute("id");
// p[1].removeAttribute("id");

let body = document.body;
// console.log(body);
let tab = document.createElement("table");

body.insertAdjacentElement("afterbegin", tab);

let tr = `
<tr>
    <th>Sno</th>
    <th>Name</th>
    <th>Salary</th>
</tr>
`;

let tr2 = `<tr><td>1</td><td>chombi</td><td>80000</td></tr>`;
tab.innerHTML += tr;
tab.innerHTML += tr2;
tab.innerHTML += tr2;
tab.innerHTML += tr2;
tab.rows[0].cells[0].style.backgroundColor = "red";

tab.style.fontSize = "32px";
tab.style.border = "5px solid blue";
tab.style.padding = "10px";
for (value of tab.rows) {
  console.log(value);

  value.cells[0].style.backgroundColor = "red";
}
// Array.from(tab.rows).map((v, i) => {
//   console.log(v);
//   console.log(i);
// });
console.log(tab.rows[0].childNodes);
