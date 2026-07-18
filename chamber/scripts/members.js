const membersContainer = document.querySelector("#members");

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    displayMembers(data.members);
}

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `

            <img src="${member.image}" alt="${member.name} logo">
            <h2>${member.name}</h2>

            <p>${member.email}</p>


            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
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