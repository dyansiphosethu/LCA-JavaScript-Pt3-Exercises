//Validate login credentials
function validateLogin() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("pwd").value;

  if (username === "admin" && password === "password123") {
    window.location.href = "index.html";
  } else {
    console.log("Invalid credentials");

    const modal = document.querySelector("modal");
    modal.style.display = "block";
  }
}

//Hides modal
function dismissModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

//Toggle the navigation bar
let toggleNavStatus = false;

function toggleNav() {
  const sidebar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    sidebar.style.width = "250px";
    sidebar.style.visibility = "visible";
    toggleNavStatus = true;
  } else {
    sidebar.style.width = "0";
    sidebar.style.visibility = "hidden";
    toggleNavStatus = false;
  }
}
