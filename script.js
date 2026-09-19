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
    // NO BUTTON
    // =========================

    noBtn.onclick = function () {

        const x =
            Math.random() * 250 - 125;

        const y =
            Math.random() * 150 - 75;

        noBtn.style.transform =
            `translate(${x}px, ${y}px)`;

    };


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
