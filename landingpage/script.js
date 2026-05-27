/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.background = "rgba(5,8,22,.92)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
    }

    else{
        header.style.background = "rgba(5,8,22,.65)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.06)";
    }

});

/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .section-title, .project-card, .flyer-card, .contact-box"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold: .15
});

revealElements.forEach((el)=>{

    el.classList.add("hidden");
    observer.observe(el);

});