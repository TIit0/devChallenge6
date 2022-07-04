
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");
console.log(hamburger);
console.log(navList);

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navList.classList.toggle("active");
});


document.querySelectorAll(".nav__list__item--link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}));