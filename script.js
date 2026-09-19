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
