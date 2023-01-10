// let body = document.body;
// let header = document.createElement("header");
// header.innerHTML += `
// <div class="lang">Bharat
// </div>
// <div>X
// </div>
// `;

// body.insertAdjacentElement("afterbegin", header);

// let h = document.querySelector("header");

// h.style.backgroundColor = "blue";
// // h.style.backgroundImage = `url("")`;
// h.style.display = "flex";
// h.style.justifyContent = "space-between";
// h.style.color = "white";
// h.style.padding = "10px 100px";

let header = document.querySelector("header");
// header.onclick = display1;

// header.addEventListener("click", display1);

// document.body.addEventListener("resize", () => {
//   console.log("resized");
// });

// let html = document.documentElement;

// html.addEventListener("resize", e => {
//   console.log(e);
// });
// console.log(html);

// body.style.backgroundColor = "blue";

function display1(e) {
  document.getElementsByTagName("header")[0].style.backgroundColor = "blue";
  console.log(e);
  console.log("hello");
}
function display2() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "green";
}

let form = document.forms;
let user_data = [];
let user, pass;
form[0].addEventListener("submit", e => {
  e.preventDefault();
  console.log("submitted");
  user = form[0].elements.username.value;
  pass = form[0].elements.password.value;
  user_data.push({ username: user, password: pass });
  console.log(user_data);
});
