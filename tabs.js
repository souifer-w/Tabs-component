const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const contact = document.querySelector(".contact");
const containerHome = document.querySelector(".container-home");
const containerAbout = document.querySelector(".container-about");
const containerServices = document.querySelector(".container-services");
const containerContact = document.querySelector(".container-contact");
function showPage(page) {
  document.querySelectorAll(".page").forEach((el) => {
    el.classList.remove("active");
  });
  page.classList.add("active");
}
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach((l) => l.classList.remove("active-p"));

    link.classList.add("active-p");
  });
});
home.addEventListener("click", () => {
  showPage(containerHome);
});
about.addEventListener("click", () => {
  showPage(containerAbout);
});
services.addEventListener("click", () => {
  showPage(containerServices);
});
contact.addEventListener("click", () => {
  showPage(containerContact);
});
