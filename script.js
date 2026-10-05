// =====================================
// BANNER IMAGE SLIDER
// =====================================

const banner = document.querySelector(".banner");
const dots = document.querySelectorAll(".dot");

const bannerImages = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=80",

    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1800&q=80",

    "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1800&q=80",

    "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=1800&q=80"
];

let currentImage = 0;


// Change banner every 4 seconds
function changeBanner() {

    currentImage++;

    if (currentImage >= bannerImages.length) {
        currentImage = 0;
    }

    banner.style.backgroundImage =
        `linear-gradient(
            rgba(45, 15, 20, 0.45),
            rgba(45, 15, 20, 0.45)
        ),
        url("${bannerImages[currentImage]}")`;

    updateDots();
}


// Start automatic slider
setInterval(changeBanner, 4000);


// =====================================
// SLIDER DOTS
// =====================================

function updateDots() {

    dots.forEach((dot, index) => {

        dot.classList.remove("active");

        if (index === currentImage) {
            dot.classList.add("active");
        }

    });
}


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentImage = index;

        banner.style.backgroundImage =
            `linear-gradient(
                rgba(45, 15, 20, 0.45),
                rgba(45, 15, 20, 0.45)
            ),
            url("${bannerImages[currentImage]}")`;

        updateDots();

    });

});


// =====================================
// PRODUCT ORDER BUTTON
// =====================================

function orderProduct(productName) {

    alert(
        "Thank you for choosing Roshini's Cake Shop! 🍰\n\n" +
        "You selected: " + productName +
        "\n\nWe will contact you soon."
    );

}


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.12)";

    } else {

        navbar.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";

    }

});