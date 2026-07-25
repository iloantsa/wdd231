async function getSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const qualified = data.members.filter(member => member.membershipLevel >= 2);

    qualified.sort(() => Math.random() - 0.5);

    const selected = qualified.slice(0, 3);

    displaySpotlights(selected);
}

getSpotlights();
function displaySpotlights(members) {

    const container = document.querySelector("#spotlights");

    members.forEach(member => {

        const level = member.membershipLevel === 3 ? "Gold Member" : "Silver Member";

        const card = document.createElement("section");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>${level}</strong></p>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        container.appendChild(card);
    });
}