const membersContainer = document.querySelector("#members");

async function getMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    displayMembers(members);
}

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(card);
    });
}

getMembers();
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});