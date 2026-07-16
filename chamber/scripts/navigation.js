const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');

})



gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
});