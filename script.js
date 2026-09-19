document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const proposal = document.getElementById("proposal");
    const success = document.getElementById("success");

    const restartBtn = document.getElementById("restartBtn");


    // =========================
    // YES BUTTON
    // =========================

    yesBtn.onclick = function () {

        console.log("YES BUTTON WORKING!");

        // Hide proposal
        proposal.style.display = "none";

        // Show success
        success.style.display = "flex";

    };


// =========================
// NO BUTTON - HOVER
// =========================

noBtn.addEventListener("mouseenter", function () {

    const maxX = 200;
    const maxY = 120;

    const x =
        Math.random() * (maxX * 2) - maxX;

    const y =
        Math.random() * (maxY * 2) - maxY;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});

    // =========================
    // START AGAIN
    // =========================

    restartBtn.onclick = function () {

        success.style.display = "none";

        proposal.style.display = "flex";

        noBtn.style.transform =
            "translate(0, 0)";

    };

});
