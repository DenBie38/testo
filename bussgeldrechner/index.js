// Optimierte und synchronisierte Version der index.js-Datei

document.addEventListener("DOMContentLoaded", function () {
    // Sicherstellen, dass die Suchfunktion korrekt arbeitet
    document.getElementById("searchbar_input").addEventListener("input", searchFine);

    // Falls ein Disclaimer vorhanden ist, automatisch verbergen nach Countdown
    if (document.getElementById("disclaimer")) {
        let countdownValue = 15;
        let countdownInterval = setInterval(function () {
            if (countdownValue > 0) {
                document.getElementById("countdown").textContent = countdownValue;
                countdownValue--;
            } else {
                disclaimerAccepted();
                clearInterval(countdownInterval);
            }
        }, 1000);
    }
});

function searchFine() {
    let searchFor = document.getElementById("searchbar_input").value.toLowerCase();
    let fines = document.querySelectorAll(".fine");
    fines.forEach(fine => {
        if (fine.querySelector(".fineText").textContent.toLowerCase().includes(searchFor)) {
            fine.classList.add("showing");
            fine.classList.remove("hiding");
        } else {
            fine.classList.remove("showing");
            fine.classList.add("hiding");
        }
    });
}

function selectFine(event) {
    let element = event.target.closest("tr");
    if (!element) return;
    element.classList.toggle("selected");
    startCalculating();
}

function startCalculating() {
    let selectedFines = document.querySelectorAll(".fine.selected");
    let fineAmount = 0;
    let wantedAmount = 0;

    selectedFines.forEach(fine => {
        fineAmount += parseInt(fine.querySelector(".fineAmount").getAttribute("data-fineamount")) || 0;
        wantedAmount += parseInt(fine.querySelector(".wantedAmount").getAttribute("data-wantedamount")) || 0;
    });

    document.getElementById("fineResult").innerHTML = `<b>Geldstrafe:</b> $${fineAmount}`;
    document.getElementById("wantedsResult").innerHTML = `<b>Wanteds:</b> ${wantedAmount}`;
}

function disclaimerAccepted() {
    let disclaimer = document.getElementById("disclaimer");
    if (disclaimer) disclaimer.style.display = "none";
    let blocker = document.getElementById("disclaimerBackgroundBlocker");
    if (blocker) blocker.style.display = "none";
}
