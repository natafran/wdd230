let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

var dt = new Date();
document.getElementById("copyrightYear").innerHTML= dt.getFullYear();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))