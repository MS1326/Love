const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const successScreen =
    document.getElementById("successScreen");

const restartBtn =
    document.getElementById("restartBtn");


// ============================
// YES BUTTON
// ============================

yesBtn.addEventListener("click", function () {

    document.getElementById("proposal").style.display = "none";

    successScreen.style.display = "flex";

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 80);
    }
});



// ============================
// NO BUTTON
// ============================

function moveNoButton() {

    const x =
        Math.random() * 250 - 125;

    const y =
        Math.random() * 150 - 75;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}


// Desktop
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// Mobile
noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


// ============================
// FLOATING HEARTS
// ============================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💘",
        "💓"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        20 + Math.random() * 35 + "px";

    heart.style.animationDuration =
        3 + Math.random() * 4 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


// Create hearts continuously

setInterval(
    createHeart,
    500
);


// ============================
// RESTART
// ============================

restartBtn.addEventListener(
    "click",
    function () {

        successScreen.style.display =
            "none";

        noBtn.style.transform =
            "translate(0, 0)";

    }
);
