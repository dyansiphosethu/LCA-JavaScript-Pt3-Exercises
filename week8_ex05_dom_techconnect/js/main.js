let developers = [];
let cardView = true;

fetch("developers.json")
  .then((response) => response.json())
  .then((data) => {
    developers = data;
    renderDevelopers(developers);
  });

function renderDevelopers(data) {
  const cardContainer = document.getElementById("cardView");
  const tableBody = document.getElementById("tableBody");

  cardContainer.innerHTML = "";
  tableBody.innerHTML = "";

  data.forEach((dev) => {
    // CARD VIEW

    cardContainer.innerHTML += `
            <div class="col-md-4 developer-card">
                <div class="card p-3 text-center">

                    <img src="${dev.avatar}" alt="${dev.name}">

                    <h4>${dev.name}</h4>

                    <p>${dev.role}</p>

                    <p>${dev.location}</p>

                    <p>${dev.skills.join(", ")}</p>

                    <span
                        class="badge ${
                          dev.availableForHire ? "bg-success" : "bg-secondary"
                        } badge-toggle"
                        onclick="toggleHire(${dev.id})"
                    >
                        ${
                          dev.availableForHire
                            ? "Available for Hire"
                            : "Not Available"
                        }
                    </span>

                </div>
            </div>
        `;

    // TABLE VIEW

    tableBody.innerHTML += `
            <tr>
                <td>${dev.name}</td>
                <td>${dev.role}</td>
                <td>${dev.location}</td>
                <td>${dev.skills.join(", ")}</td>
                <td>
                    <span
                        class="badge ${
                          dev.availableForHire ? "bg-success" : "bg-secondary"
                        } badge-toggle"
                        onclick="toggleHire(${dev.id})"
                    >
                        ${dev.availableForHire ? "Available" : "Unavailable"}
                    </span>
                </td>
            </tr>
        `;
  });

  updateCount(data.length);
}

function updateCount(count) {
  document.getElementById("developerCount").textContent = count;
}

document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = developers.filter(
    (dev) =>
      dev.name.toLowerCase().includes(value) ||
      dev.role.toLowerCase().includes(value) ||
      dev.skills.some((skill) => skill.toLowerCase().includes(value)),
  );

  renderDevelopers(filtered);
});

document.getElementById("toggleViewBtn").addEventListener("click", function () {
  cardView = !cardView;

  document.getElementById("cardView").classList.toggle("d-none");

  document.getElementById("tableView").classList.toggle("d-none");
});

function toggleHire(id) {
  const dev = developers.find((d) => d.id === id);

  dev.availableForHire = !dev.availableForHire;

  renderDevelopers(developers);
}

document
  .getElementById("developerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const role = document.getElementById("role").value.trim();

    const skills = document.getElementById("skills").value.trim();

    const location = document.getElementById("location").value.trim();

    const error = document.getElementById("formError");

    error.textContent = "";

    if (!name || !role || !skills || !location) {
      error.textContent = "All fields are required.";
      return;
    }

    const newDeveloper = {
      id: developers.length + 1,
      name,
      role,
      location,

      skills: skills.split(",").map((skill) => skill.trim()),

      avatar: "https://placehold.co/100x100",

      availableForHire: true,
    };

    developers.push(newDeveloper);

    renderDevelopers(developers);

    this.reset();
  });
