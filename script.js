gsap.from(".navbar",{
    y:-100,
    opacity:0,
    duration:1
});

gsap.from(".movie-logo",{
    x:-150,
    opacity:0,
    duration:1.2,
    delay:.5
});

gsap.from(".tagline",{
    y:50,
    opacity:0,
    duration:1,
    delay:.8
});

gsap.from(".hero-buttons",{
    y:60,
    opacity:0,
    duration:1,
    delay:1.1
});

gsap.registerPlugin(ScrollTrigger);

// About Section
gsap.from(".about", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    }
});

// Trailer Section
gsap.from(".trailer", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".trailer",
        start: "top 80%"
    }
});

// Cast Section
gsap.from(".cast", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".cast",
        start: "top 80%"
    }
});

// Book Section
gsap.from(".book-section", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".book-section",
        start: "top 80%"
    }
});

// Footer
gsap.from(".footer", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%"
    }
});
// Navbar Blur on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/*====================================================
      CAST SHOWCASE INTERACTION
====================================================*/

const castItems = document.querySelectorAll(".cast-item");

const displayImage = document.getElementById("displayImage");
const displayName = document.getElementById("displayName");
const displayActor = document.getElementById("displayActor");
const displayDescription = document.getElementById("displayDescription");
const displayRole = document.getElementById("displayRole");
const displaySuit = document.getElementById("displaySuit");
const displayStatus = document.getElementById("displayStatus");

const glow = document.querySelector(".glow");

castItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        // Active state
        castItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        // Fade Out
        gsap.to(
            [
                displayImage,
                displayName,
                displayActor,
                displayDescription,
                displayRole,
                displaySuit,
                displayStatus
            ],
            {
                opacity:0,
                y:20,
                duration:.18,
                onComplete:()=>{

                    displayImage.src=item.dataset.image;

                    displayName.textContent=item.dataset.name;

                    displayActor.textContent=item.dataset.actor;

                    displayDescription.textContent=item.dataset.description;

                    displayRole.textContent=item.dataset.role;

                    displaySuit.textContent=item.dataset.suit;

                    displayStatus.textContent=item.dataset.status;

                    glow.style.background=item.dataset.color;

                    displayActor.style.color=item.dataset.color;

                    document.querySelectorAll(".display-info span")
                    .forEach(span=>{
                        span.style.color=item.dataset.color;
                    });

                    item.style.borderLeftColor=item.dataset.color;

                    gsap.fromTo(
                        [
                            displayImage,
                            displayName,
                            displayActor,
                            displayDescription,
                            displayRole,
                            displaySuit,
                            displayStatus
                        ],
                        {
                            opacity:0,
                            y:20
                        },
                        {
                            opacity:1,
                            y:0,
                            duration:.35,
                            stagger:.03
                        }
                    );

                }
            }
        );

    });

});
/*==========================
QUOTE SECTION
==========================*/

gsap.fromTo(".movie-quote",
{
opacity:0,
y:70
},
{
opacity:1,
y:0,
duration:1,
scrollTrigger:{
trigger:".quote-section",
start:"top 70%"
}
});

gsap.fromTo(".quote-author",
{
opacity:0,
y:30
},
{
opacity:1,
y:0,
delay:.5,
duration:.8,
scrollTrigger:{
trigger:".quote-section",
start:"top 70%"
}
});