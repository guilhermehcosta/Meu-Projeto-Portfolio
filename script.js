let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");  // Use querySelectorAll aqui
let navLinks = document.querySelectorAll('header nav a');  // E aqui também

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



window.sr = ScrollReveal({reset: true});

sr.reveal(".home-content",{ duration:3000} )

sr.reveal(".timeline-item",{ duration:3000} )

sr.reveal(".service-box",{ duration:3000} )

sr.reveal(".testimonial-item",{ duration:3000} )

sr.reveal(".contact",{ duration:3000} )