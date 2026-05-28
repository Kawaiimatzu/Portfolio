console.log("Luxury Portfolio Website Loaded");

/* =========================
   IMAGE PREVIEW
========================= */

function openPreview(src){

  const preview = document.getElementById("preview");
  const previewImg = document.getElementById("preview-img");

  preview.classList.add("active");

  previewImg.src = src;

}

function closePreview(){

  document
  .getElementById("preview")
  .classList.remove("active");

}

/* =========================
   MOUSE PARTICLES
========================= */

document.addEventListener("mousemove",(e)=>{

  const particle =
  document.createElement("div");

  particle.className =
  "mouse-particle";

  particle.style.left =
  e.clientX + "px";

  particle.style.top =
  e.clientY + "px";

  document.body.appendChild(particle);

  setTimeout(()=>{

    particle.remove();

  },800);

});

let lastScroll = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  if(currentScroll > lastScroll){

    /* SCROLL DOWN */
    navbar.style.transform = "translateY(-120%)";

  }else{

    /* SCROLL UP */
    navbar.style.transform = "translateY(0)";

  }

  lastScroll = currentScroll;

});