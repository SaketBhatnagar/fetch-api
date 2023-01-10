//! fetch("url")
// it is API
// it will return a Promise
// object
// console.log(fetch("https://api.github.com/users"));

let section = document.querySelector("section");

fetch("https://api.github.com/users")
  .then(res => {
    res
      .json()
      .then(data => {
        data.map(value => {
          let { login, avatar_url, html_url } = value;
          section.innerHTML += `
            <div>
            <img src=${avatar_url} alt=${login} width="200px">
            <h1> ${login} <h1>
                <a href=${html_url} target="_blank">Goto Github Profile</a>
            </div>
            `;
        });
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err))
  .finally(() => {
    console.log("server responded....");
  });
