const timelineItems = document.querySelectorAll(".timeline-item");


const heroSmall = document.querySelector(".hero-small");
const heroTitle = document.querySelector(".hero-content h1");
const heroDescription = document.querySelector(".hero-description");
const heroButton = document.querySelector(".hero-button");

const heroElements = [
    heroSmall,
    heroTitle,
    heroDescription,
    heroButton
];

heroElements.forEach((element, index) => {

    if (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";

        setTimeout(() => {

            element.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, 300 + (index * 180));

    }

});


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


timelineItems.forEach(function(item) {

    observer.observe(item);

});