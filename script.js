let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");  // Use querySelectorAll aqui
let navLinks = document.querySelectorAll('header nav a');  // E aqui também




const MyObserver = new IntersectionObserver((entries) =>{
    console.log(entries)
})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => MyObserver.observe(element))















window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

