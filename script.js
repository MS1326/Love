const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const proposal = document.getElementById("proposal");
const success = document.getElementById("success");

const restartBtn = document.getElementById("restartBtn");


// ============================
// YES BUTTON
// ============================

yesBtn.addEventListener("click", function () {

    console.log("YES clicked!");

    // Hide proposal
    proposal.style.display = "none";

    // Show success
    success.hidden = true;

});


// ============================
// NO BUTTON
// ============================

function moveNoButton() {

    const x =
        Math.random() * 200 - 100;

    const y =
        Math.random() * 120 - 60;

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
// START AGAIN
// ============================

restartBtn.addEventListener("click", function () {

    // Hide success
    success.hidden = true;

    // Show proposal
    proposal.style.display = "flex";

    // Reset No button
    noBtn.style.transform =
        "translate(0, 0)";

});
