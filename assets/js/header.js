const searchBar = document.getElementsByClassName('.search');

function openPopup() {
    const popup = document.getElementById("contacts-window");
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("contacts-window");
    popup.style.display = "none";
}

function openSearch() {
    const search = document.getElementById("search-bar");
    search.style.display = "flex";
}

function closeSearch() {
    const search = document.getElementById("search-bar");
    search.style.display = "none";
}

function openNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = "flex";
}

function closeNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = "none";
}

const searchBtn = document.getElementById('search');
const contactUsBtn = document.getElementById('contact-us');
const menuBtn = document.getElementById('menu');
let isOn = false;

menuBtn.addEventListener("click", function () {
    const imageOn = "url('../images/SVGs/bars-active.svg')";
    const imageOff = "url('../images/SVGs/bars.svg')";
    isOn = !isOn;

    if (isOn) {
        menuBtn.style.backgroundImage = imageOn;
        menuBtn.style.backgroundColor = "#007DC5";
        searchBtn.disabled = true;
        contactUsBtn.disabled = true;
        openNavbar();
    } else {
        menuBtn.style.backgroundImage = imageOff;
        menuBtn.style.backgroundColor = "#F2F2F2";
        searchBtn.disabled = false;
        contactUsBtn.disabled = false;
        closeNavbar();
    }
});
