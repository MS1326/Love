/* ==================================
   OPENING SCREEN
================================== */

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

// Wait for the opening animation

setTimeout(() => {
  opening.classList.add("hide");

  mainContent.classList.add("show");
}, 5000);

/* ==================================
   TYPING MESSAGE
================================== */

const text = "I wanted to tell you something...  ❤️";

const message = document.getElementById("message");

let index = 0;

function typeText() {
  if (index < text.length) {
    message.innerHTML =
      text.substring(0, index + 1) + '<span class="cursor">|</span>';

    index++;

    setTimeout(typeText, 45);
  } else {
    message.innerHTML = text;
  }
}

// Start typing after opening

setTimeout(() => {
  typeText();
}, 5300);

/* ==================================
   SURPRISE BUTTON
================================== */

function showSurprise() {
  const surprise = document.getElementById("surprise");

  surprise.style.display = "block";

  // Create lots of hearts

  createHearts(40);

  // Change button text

  const button = document.querySelector("button");

  button.innerHTML = "You found it ❤️";

  button.style.background = "linear-gradient(135deg, #ffb6c9, #ffffff)";

  // Scroll to message

  setTimeout(() => {
    surprise.scrollIntoView({
      behavior: "smooth",

      block: "center",
    });
  }, 200);
}

/* ==================================
   FLOATING HEART
================================== */

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  const hearts = ["❤️", "💕", "💖", "💗", "💘", "💝", "💓", "🥰"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heart.style.animationDuration = Math.random() * 4 + 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

// Normal floating hearts

setInterval(createHeart, 800);

/* ==================================
   MULTIPLE HEARTS
================================== */

function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 80);
  }
}

/* ==================================
   SPARKLES
================================== */

function createSparkle() {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";

  sparkle.style.left = Math.random() * 100 + "vw";

  sparkle.style.top = Math.random() * 100 + "vh";

  sparkle.style.animationDelay = Math.random() * 2 + "s";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2500);
}

setInterval(createSparkle, 500);
