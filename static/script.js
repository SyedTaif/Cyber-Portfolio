// ==========================================
// Cyber Portfolio v2.0
// script.js
// ==========================================

// Typing Animation

const typingElement = document.getElementById("typing");

const words = [
    "Cybersecurity Analyst",
    "SOC Analyst",
    "Application Security",
    "Python Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==========================================
// Scroll To Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================================
// Reveal Animation
// ==========================================

const reveals = document.querySelectorAll("section");

function revealSections() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

reveals.forEach(section => {

    section.classList.add("reveal");

});

window.addEventListener("scroll", revealSections);

revealSections();


// ==========================================
// Active Navbar Link
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// Mobile Menu
// ==========================================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// ==========================================
// Close Mobile Menu
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("show");

        }

    });

});


// ==========================================
// Footer Year
// ==========================================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Syed Taif Ahmed. All Rights Reserved.`;

}


// ==========================================
// Console Message
// ==========================================

console.log("Cybersecurity Portfolio v2.0 Loaded Successfully");