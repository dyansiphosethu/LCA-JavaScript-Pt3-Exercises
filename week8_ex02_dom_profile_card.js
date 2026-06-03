//Update the textContent of an element
let nameBtn = document.getElementById("updateNameBtn");
nameBtn.addEventListener("click", function () {
  let name = prompt("Update name:");
  document.getElementById("profileName").textContent = name;
});

//Update the textContent of an element
let roleBtn = document.getElementById("updateRoleBtn");
roleBtn.addEventListener("click", function () {
  let role = prompt("Update role:");
  document.getElementById("profileRole").textContent = role;
});

//Toggle change the background color
let toggleBtn = document.getElementById("toggleStatusBtn");
let div = document.getElementById("profileCard");
toggleBtn.addEventListener("click", function () {
  console.log("Clicked");
  div.classList.toggle("active-status");
});

//Change the image element's src attribute
let imgBtn = document.getElementById("changeImageBtn");
imgBtn.addEventListener("click", function () {
  newSrc = prompt("Enter image url:");
  document.getElementById("profileImage").setAttribute("src", newSrc);
});
