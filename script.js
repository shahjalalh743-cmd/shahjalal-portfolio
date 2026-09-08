const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

// Mobile menu
menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};


// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingAnimation() {

    const currentWord = words[wordIndex];

    if (isDeleting === false) {

        // Write letters
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        // Word finished
        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        // Delete letters
        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        // Word deleted
        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typingAnimation,
        isDeleting ? 60 : 120
    );
}
// Start animation
typingAnimation();


// ================= BACK TO TOP =================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});