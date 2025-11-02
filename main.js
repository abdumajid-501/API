//GET, POST, DELETE, PATCH, PUT

//apidan malumot olish

// 1-yoli
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))


// 2 - yoli
// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await response.json();

//     console.log(data);
// }

// getData();



async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Serverdan ma'lumot olinmadi");

    let users = await response.json();
    let usersDiv = document.getElementById("users");

    users.forEach(user => {
      let div = document.createElement("div");
      div.className = "user";
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
      usersDiv.appendChild(div);
    });
  } catch (err) {
    document.getElementById("users").innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

getData();
