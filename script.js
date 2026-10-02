/* =========================================================
   LUMIÈRE BEAUTY STUDIO
   JavaScript
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

        });

    });

}


/* ================= HEADER SCROLL ================= */

const header = document.querySelector(".site-header");


window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 35px rgba(59,43,39,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= TESTIMONIAL SLIDER ================= */

const testimonials =
    document.querySelectorAll(".testimonial");

const prevButton =
    document.getElementById("prevReview");

const nextButton =
    document.getElementById("nextReview");

const sliderDots =
    document.getElementById("sliderDots");


let currentReview = 0;


/* Create dots */

if (sliderDots && testimonials.length > 0) {

    testimonials.forEach((_, index) => {

        const dot = document.createElement("span");

        dot.className = "slider-dot";

        if (index === 0) {

            dot.classList.add("active");

        }

        dot.addEventListener("click", () => {

            currentReview = index;

            showReview(currentReview);

        });

        sliderDots.appendChild(dot);

    });

}


function showReview(index) {

    testimonials.forEach((testimonial, i) => {

        testimonial.classList.toggle(
            "active-testimonial",
            i === index
        );

    });


    const dots =
        document.querySelectorAll(".slider-dot");

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


if (nextButton) {

    nextButton.addEventListener("click", () => {

        currentReview++;

        if (currentReview >= testimonials.length) {

            currentReview = 0;

        }

        showReview(currentReview);

    });

}


if (prevButton) {

    prevButton.addEventListener("click", () => {

        currentReview--;

        if (currentReview < 0) {

            currentReview = testimonials.length - 1;

        }

        showReview(currentReview);

    });

}


/* ================= AUTO SLIDER ================= */

if (testimonials.length > 1) {

    setInterval(() => {

        currentReview++;

        if (currentReview >= testimonials.length) {

            currentReview = 0;

        }

        showReview(currentReview);

    }, 6000);

}


/* ================= BOOKING FORM ================= */

const bookingForm =
    document.getElementById("bookingForm");

const successMessage =
    document.getElementById("successMessage");


if (bookingForm) {

    bookingForm.addEventListener("submit", (event) => {

        event.preventDefault();


        if (!bookingForm.checkValidity()) {

            bookingForm.reportValidity();

            return;

        }


        successMessage.classList.add("show");


        bookingForm.reset();


        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


        setTimeout(() => {

            successMessage.classList.remove("show");

        }, 7000);

    });

}


/* ================= DATE MINIMUM ================= */

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);

}


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .package-card, .team-card, .process-step, .contact-item"
);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".main-nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href && href.startsWith("#")) {

            link.classList.remove("active");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        }

    });

});


/* ================= SMOOTH ANCHOR LINKS ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            targetId === "#" ||
            targetId === ""
        ) {

            return;

        }


        const target =
            document.querySelector(targetId);

        if (!target) return;


        event.preventDefault();


        const headerHeight =
            document.querySelector(".site-header")
                ?.offsetHeight || 0;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* ================= YEAR ================= */

console.log(
    "Lumière Beauty Studio demo loaded successfully."
);
