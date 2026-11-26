function showToast(message) {
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

const bookingForm = document.getElementById("booking-form");

if (bookingForm && window.location.hash === "#booking-form") {
    bookingForm.scrollIntoView({
        behavior: "smooth"
    });

    showToast("Ready to book your IPL tickets!");
}

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const ticketInput = document.getElementById("tickets");

const summaryMatch = document.getElementById("summary-match");
const summaryStand = document.getElementById("summary-stand");
const summaryPrice = document.getElementById("summary-price");
const summaryQuantity = document.getElementById("summary-quantity");
const summaryTotal = document.getElementById("summary-total");

function updateBookingSummary() {

    if (!matchSelect || !standSelect || !ticketInput) {
        return;
    }

    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(ticketInput.value);

    const prices = {
        General: 800,
        Premium: 1500,
        VIP: 3000
    };

    const price = prices[stand] || 0;
    const total = price * quantity;

    summaryMatch.textContent = match || "Not selected";
    summaryStand.textContent = stand || "Not selected";
    summaryPrice.textContent = "₹" + price;
    summaryQuantity.textContent = quantity || 0;
    summaryTotal.textContent = "₹" + total;

    showToast("Booking summary updated!");
}

if (matchSelect && standSelect && ticketInput) {

    matchSelect.addEventListener("change", updateBookingSummary);

    standSelect.addEventListener("change", updateBookingSummary);

    ticketInput.addEventListener("input", updateBookingSummary);
}

const teamFilter = document.getElementById("team");
const matchCards = document.querySelectorAll(".match-card");

if (teamFilter) {

    teamFilter.addEventListener("change", function () {

        const selectedTeam = teamFilter.value;

        matchCards.forEach(function (card) {

            const teams = card.dataset.teams.split(" ");

            if (selectedTeam === "All" || teams.includes(selectedTeam)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        showToast("Match filter updated!");
    });
}

const matchContainer = document.getElementById("match-container");
const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");

if (matchContainer && gridButton && listButton) {

    gridButton.addEventListener("click", function () {

        matchContainer.classList.remove("list-view");

        showToast("Grid view selected!");
    });

    listButton.addEventListener("click", function () {

        matchContainer.classList.add("list-view");

        showToast("List view selected!");
    });
}

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        showToast("Navigation menu toggled!");
    });

    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

        });
    });
}