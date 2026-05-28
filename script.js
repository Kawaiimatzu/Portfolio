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

/* =========================
   NAVBAR HIDE / SHOW
========================= */

let lastScroll = 0;

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  const currentScroll =
  window.pageYOffset;

  if(currentScroll > lastScroll){

    /* SCROLL DOWN */
    navbar.style.transform =
    "translateY(-120%)";

  }else{

    /* SCROLL UP */
    navbar.style.transform =
    "translateY(0)";

  }

  lastScroll = currentScroll;

});

/* =========================
   FLOATING LIGHT PARTICLES
========================= */

const aboutBox =
document.querySelector(".about-box");

for(let i = 0; i < 18; i++){

  const light =
  document.createElement("span");

  light.classList.add("floating-light");

  light.style.left =
  Math.random() * 100 + "%";

  light.style.top =
  Math.random() * 100 + "%";

  light.style.animationDelay =
  Math.random() * 6 + "s";

  light.style.animationDuration =
  4 + Math.random() * 6 + "s";

  aboutBox.appendChild(light);

}

/* =========================
   STATS COUNT ANIMATION
========================= */

const counters =
document.querySelectorAll(".about-box h3");

const speed = 200;

counters.forEach(counter => {

  const animate = () => {

    const value =
    +counter.innerText
    .replace("+","")
    .replace("%","")
    .replace("/7","");

    const data =
    +counter.getAttribute("data-count");

    const time =
    data / speed;

    if(value < data){

      counter.innerText =
      Math.ceil(value + time) + "+";

      setTimeout(animate,20);

    }else{

      if(data === 100){

        counter.innerText = "100%";

      }else if(data === 24){

        counter.innerText = "24/7";

      }else{

        counter.innerText =
        data + "+";

      }

    }

  };

  animate();

});